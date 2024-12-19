import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class GroupService {
  constructor(private http: HttpClient) {}

 

  addGroup(data: any) {
    return this.http.post('http://localhost:8888/api/groups', data)}

  
  editGroup(id: string, newdata: any) {
    return this.http.put(`http://localhost:8888/api/groups/${id}`, newdata);
  }
  deleteGroup(id: any) {
    return this.http.delete(`http://localhost:8888/api/groups/${id}`);
  }
  

  getAllGroups(){
    return this.http.get('http://localhost:8888/api/groups')
  }
}
