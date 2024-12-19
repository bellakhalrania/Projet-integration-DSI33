import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KeycloakService } from '../../../services/keycloak/keycloak.service';

@Component({
  selector: 'app-navbar-client',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-client.component.html',
  styleUrl: './navbar-client.component.css'
})
export class NavbarClientComponent {

  
    constructor(private keycloakService: KeycloakService) {}
    
      // Check if the user is authenticated
      get isAuthenticated(): boolean {
        return this.keycloakService.keycloakInstance?.authenticated ?? false;
      }
    
      // Get the roles of the user
      get userRoles(): string[] {
        return this.keycloakService.getRealmAccessRoles();
      }
    
      // Get user profile with roles
      get userProfile() {
        const profile = this.keycloakService.profile;
        if (profile) {
          // Return profile with roles added
          return {
            ...profile,
            roles: this.userRoles, // Use the roles from getRealmAccessRoles
          };
    
          console.log(this.userRoles);
        }
        return null;
      }

}
