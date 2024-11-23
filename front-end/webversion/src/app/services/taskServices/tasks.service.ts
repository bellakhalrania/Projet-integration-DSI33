import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Task {
  id?: string;
  name: string;
  startDate: string;
  startTime: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'any', // ou dans le tableau providers d'un module spécifique
})

export class TasksService {

  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http:HttpClient) { }// Injection correcte de HttpClient

  // Get all tasks
  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAllTasks`);	
    
  }


  // Add a new task
  addTask(task: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addTask`, task);
    
  }
  //update a task
  updateTask(task: any ): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateTask/${task._id}`, task);
    

  }

  // Delete a task

  deleteTask(id: string): Observable<any> {
    if (!id) {
      console.error('Erreur : ID de tâche manquant.');
      
    }
    return this.http.delete(`${this.apiUrl}/deleteTask/${id}`);
  }
  

  // Mark task as completed
  completeTask(task: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/completed/${task.id}`, task);
  }
}
  

