import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class ExerciceService {
  constructor(private http: HttpClient) {}

 

  addExercice(data: any) {
    return this.http.post('http://localhost:8081/api/exercices', data)}

  // Modifier un exercice
  editExercice(id: string, newdata: any) {
    return this.http.put(`http://localhost:8081/api/exercices/${id}`, newdata);
  }
  deleteExercice(id: any) {
    return this.http.delete(`http://localhost:8081/api/exercices/${id}`);
  }
  

  getAllExercices(){
    return this.http.get('http://localhost:8081/api/exercices')
  }
}
