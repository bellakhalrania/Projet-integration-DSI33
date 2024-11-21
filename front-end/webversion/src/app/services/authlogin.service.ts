import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthloginService {
  loggedIn = false;

  constructor(private http: HttpClient) {}

  loginUser(data: any) {
    return this.http.post('http://localhost:3000/login', data);
  }

  registeruser(profilUser: any) {
    return this.http.post('http://localhost:3000/register', profilUser);
  }
}
