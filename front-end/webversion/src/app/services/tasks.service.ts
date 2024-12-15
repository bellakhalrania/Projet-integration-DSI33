import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class TasksService {
  // URL de l'API Gateway pour accéder aux routes des tâches
  private baseUrl = 'http://localhost:3000/api/tasks'; // URL mise à jour pour l'API Gateway

  constructor(private http: HttpClient) {}

  /**
   * Récupérer toutes les tâches
   */
  getTasks(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getAllTasks`);
  }

  /**
   * Ajouter une nouvelle tâche
   * @param task Tâche à ajouter
   */
  addTask(task: any): Observable<any> {
    
    console.log('Données envoyées pour addTask :', task);
    return this.http.post<any>(`${this.baseUrl}/addTask`, task);
  }

  /**
   * Mettre à jour une tâche existante
   * @param task Tâche à mettre à jour (inclut l'ID)
   */
  updateTask(task: any): Observable<any> {
    if (!task._id) {
      throw new Error("L'ID de la tâche est requis pour la mise à jour.");
    }
    return this.http.put<any>(`${this.baseUrl}/updateTask/${task._id}`, task);
  }

  /**
   * Supprimer une tâche
   * @param id ID de la tâche à supprimer
   */
  deleteTask(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/deleteTask/${id}`);
  }

  /**
   * Marquer une tâche comme terminée
   * @param id ID de la tâche à marquer comme terminée
   */
  completeTask(id: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/completed/${id}`, {});
  }
}
