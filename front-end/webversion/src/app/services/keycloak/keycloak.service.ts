import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Keycloak, { KeycloakInstance } from 'keycloak-js';
import { UserProfile } from './user-profile';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  private _keycloak: KeycloakInstance | undefined;
  private isBrowser: boolean;
  private _profile: UserProfile | undefined;

  get profile(): UserProfile | undefined {
    return this._profile;
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    // Vérifier si l'environnement est le navigateur avant d'accéder à localStorage
    if (this.isBrowser) {
      const storedProfile = localStorage.getItem('userProfile');
      if (storedProfile) {
        this._profile = JSON.parse(storedProfile);
      }
    }
  }

  /**
   * Initializes Keycloak
   */
  async init(): Promise<boolean> {
    if (!this.isBrowser) {
      console.warn('Skipping Keycloak initialization: Not running in a browser context.');
      return false;
    }

    if (!this._keycloak) {
      this._keycloak = new Keycloak({
        url: 'http://localhost:8080',
        realm: 'mindbalence-realm',
        clientId: 'web-client',
      });
    }

    try {
      console.log('Initializing Keycloak...');
      const authenticated = await this._keycloak.init({
        onLoad: 'check-sso', // Permet de vérifier la session sans exiger une connexion
        checkLoginIframe: false,
      });

      if (authenticated) {
        const userProfile = await this._keycloak.loadUserProfile();
        this._profile = {
          ...userProfile,
          token: this._keycloak.token || '',
          realm_access: this._keycloak.realmAccess || { roles: [] },  // Assurez-vous que realm_access existe et contient un tableau de rôles
        };

        // Enregistrer le profil dans localStorage si dans un environnement de navigateur
        if (this.isBrowser) {
          localStorage.setItem('userProfile', JSON.stringify(this._profile));
        }
      }

      console.log('Keycloak initialized. Authenticated:', authenticated);
      return authenticated;
    } catch (error) {
      console.error('Error during Keycloak initialization:', error);
      return false;
    }
  }

  /**
   * Get the current Keycloak instance
   * @returns KeycloakInstance | undefined
   */
  get keycloakInstance(): KeycloakInstance | undefined {
    if (!this._keycloak) {
      console.warn('Keycloak instance is not initialized.');
    }
    return this._keycloak;
  }


   // Get the roles from realm_access
   getRealmAccessRoles(): string[] {
    if (this._keycloak && this._keycloak.tokenParsed) {
      const realmAccess = this._keycloak.tokenParsed['realm_access'];
      return realmAccess ? realmAccess['roles'] || [] : [];
    }
    return [];
  }

  
  /**
   * Vérifie si l'utilisateur a un ou plusieurs rôles requis.
   * @param roles - Les rôles requis pour accéder à une ressource.
   * @returns boolean
   */
  hasRoles(roles: string[]): boolean {
    if (!this.keycloakInstance?.authenticated || !this.keycloakInstance.resourceAccess) {
      return false;
    }

    const userRoles = this.keycloakInstance.resourceAccess['web-client']?.roles || [];
    return roles.every(role => userRoles.includes(role));
  }

  /**
   * Checks if the current token is expired
   * @returns boolean
   */
  isTokenExpired(): boolean {
    if (!this._keycloak || !this._keycloak.token) {
      console.error('Keycloak instance or token is not available.');
      return true; // Treat as expired
    }
    return this._keycloak.isTokenExpired();
  }

  login(): void {
    if (!this.isBrowser) {
      console.warn('Cannot perform login: Not running in a browser context.');
      return;
    }

    this.keycloakInstance?.login().then(() => {
      // Charger le profil utilisateur après la connexion
      this.keycloakInstance?.loadUserProfile().then((userProfile) => {
        this._profile = {
          ...userProfile,
          token: this.keycloakInstance?.token || '',
        };

        // Enregistrer le profil dans localStorage
        if (this.isBrowser) {
          localStorage.setItem('userProfile', JSON.stringify(this._profile));
        }
        console.log('User profile:', this._profile);
      }).catch((error) => {
        console.error('Error loading user profile:', error);
      });
    }).catch((error) => {
      console.error('Error during login:', error);
    });
  }

  logout(): void {
    if (this.isBrowser) {
      // Supprimer le profil de localStorage lors de la déconnexion
      localStorage.removeItem('userProfile');
    }
    this.keycloakInstance?.logout({ redirectUri: 'http://localhost:4200' });
  }
}
