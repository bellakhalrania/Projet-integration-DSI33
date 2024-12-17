import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Keycloak, { KeycloakInstance } from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  private _keycloak: KeycloakInstance | undefined;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
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
        onLoad: 'login-required', // Require login on app load
        checkLoginIframe: false, // Optional: Disable login iframe checks
      });

      console.log('Keycloak initialized. Authenticated:', authenticated);
      return authenticated;
    } catch (error) {
      console.error('Error during Keycloak initialization:', error);
      throw error;
    }
  }

  get keycloakInstance(): KeycloakInstance | undefined {
    return this._keycloak;
  }
}
