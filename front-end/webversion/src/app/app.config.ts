import { APP_INITIALIZER, ApplicationConfig, PLATFORM_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { KeycloakService } from './services/keycloak/keycloak.service';
import { isPlatformBrowser } from '@angular/common';

export function initializeKeycloak(keycloak: KeycloakService, platformId: Object) {
  return () => {
    if (isPlatformBrowser(platformId)) {
      return keycloak.init();
    } else {
      console.warn('Skipping Keycloak initialization: Not running in a browser context.');
      return Promise.resolve();
    }
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      deps: [KeycloakService, PLATFORM_ID],
      multi: true,
    },
  ],
};
