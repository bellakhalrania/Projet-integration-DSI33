import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { KeycloakService } from '../keycloak/keycloak.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(private keycloakService: KeycloakService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Vérification si l'instance Keycloak existe
    const keycloakInstance = this.keycloakService.keycloakInstance;
    if (!keycloakInstance) {
      console.warn('Keycloak instance is not initialized. Proceeding without token.');
      return next.handle(request);
    }

    // Rafraîchir le token si nécessaire et ajouter le token à l'en-tête Authorization
    return from(keycloakInstance.updateToken(30)) // Rafraîchir le token si expirable dans moins de 30s
      .pipe(
        mergeMap(() => {
          const token = keycloakInstance.token;
          if (token) {
            const authReq = request.clone({
              headers: request.headers.set('Authorization', `Bearer ${token}`)
            });
            return next.handle(authReq);
          }
          return next.handle(request);
        }),
        catchError((error) => {
          console.error('Error while updating Keycloak token:', error);
          return next.handle(request); // Continuer sans token en cas d'erreur
        })
      );
  }
}
