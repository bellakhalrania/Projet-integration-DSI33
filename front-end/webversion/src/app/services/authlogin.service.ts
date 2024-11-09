import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthloginService {
  ProfilUser={
    username:'',
    email:'',
    password:'',
  }
  loggedIn:boolean=false

  constructor(private http:HttpClient) {
    
   }
  loginUser(data:any){
    return this.http.post('http://localhost:3000/login',data)
  }

  


//register user
registeruser(ProfilUser:any){
return this.http.post('http://localhost:3000/register',ProfilUser)
}
//register user
}
