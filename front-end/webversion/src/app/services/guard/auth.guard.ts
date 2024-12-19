import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { KeycloakService } from '../keycloak/keycloak.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private keycloakService: KeycloakService, private router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    // Check if the user is authenticated
    const isLoggedIn = this.keycloakService.keycloakInstance?.authenticated;

    if (!isLoggedIn) {
      // If user is not authenticated and the route requires authentication, redirect to login
      await this.keycloakService.login(); // Redirect to login page
      return false;
    }

    // Check if the route requires roles
    const requiredRoles = route.data['roles'] as string[] | undefined;
    
    if (requiredRoles && !this.hasRequiredRoles(requiredRoles)) {
      // If user doesn't have the required roles, redirect to 'unauthorized' page
      this.router.navigate(['/unauthorized']);
      return false;
    }

    // Allow access if user is authenticated and has the required roles
    return true;
  }

  // Helper method to check if the user has the required roles
  private hasRequiredRoles(requiredRoles: string[]): boolean {
    const userRoles = this.keycloakService.keycloakInstance?.tokenParsed?.realm_access?.roles || [];
    return requiredRoles.some(role => userRoles.includes(role));
  }
}
