import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthloginService {

  private apiUrl = 'http://localhost:3000/groups';
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

}
 