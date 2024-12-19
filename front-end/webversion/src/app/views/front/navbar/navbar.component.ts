import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { KeycloakService } from '../../../services/keycloak/keycloak.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, RouterLink, CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

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

  // Log out the user
  logout(): void {
    this.keycloakService.logout();
  }

  // Log in the user
  login(): void {
    this.keycloakService.login();
  }
}
