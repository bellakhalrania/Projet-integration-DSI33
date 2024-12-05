import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  loginWithFacebook() {
    window.location.href = 'http://localhost:3000/auth/facebook';
}
}
