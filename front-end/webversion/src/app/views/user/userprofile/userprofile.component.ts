import { Component } from '@angular/core';
import { KeycloakService } from '../../../services/keycloak/keycloak.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent {

  
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


}
