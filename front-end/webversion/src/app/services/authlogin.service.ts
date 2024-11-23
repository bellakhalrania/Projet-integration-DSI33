import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
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

 // Créer un groupe
 createGroup(group: any): Observable<any> {
  return this.http.post(this.apiUrl, group);
}


  // Obtenir tous les groupes
  getGroups(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtenir un groupe par ID
  getGroupById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Mettre à jour un groupe
  updateGroup(id: string, group: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, group);
  }

  // Supprimer un groupe
  deleteGroup(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}


 


