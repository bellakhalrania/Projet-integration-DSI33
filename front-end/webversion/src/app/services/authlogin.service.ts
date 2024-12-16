import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root',
})
export class AuthloginService {
  private api = 'http://localhost:8888/api'; // Base URL du Gateway

  ProfilUser = {
    username: '',
    email: '',
    password: '',
  };

  loggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  // Méthode pour connecter un utilisateur
  loginUser(data: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.api}/login`, data).pipe(
      tap(response => {
        // Assuming a successful response indicates login success
        if (response) {
          this.loggedIn = true; // Change loggedIn to true
        }
      })
    );
  }

  // Méthode pour enregistrer un utilisateur
  registerUser(ProfilUser: { username: string, email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.api}/register`, ProfilUser);
  }

}
