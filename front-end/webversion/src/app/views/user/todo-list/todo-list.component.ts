import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NavbarClientComponent } from '../navbar-client/navbar-client.component';
import { TasksService } from '../../../services/taskServices/tasks.service';

interface Task {
  _id?: string; // ID nécessaire pour les modifications côté backend
  name: string;
  startDate: string;
  startTime: string;
  completed: boolean;
}

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgClass, NavbarClientComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  Title = 'Add your Tasks';
  title2 = 'Tasks List';

  taskName: string = '';
  startDate: string = '';
  startTime: string = '';
  tasks: Task[] = [];
  isAvalible: boolean = false;
  isEditing = false; // Indique si une tâche est en cours d'édition
  editingIndex: number | null = null; // Index de la tâche à éditer

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  /**
   * Charger les tâches depuis le backend
   */
  loadTasks(): void {
    this.taskService.getTasks().subscribe(
      (data: Task[]) => {
        this.tasks = data;
        console.log('Tâches chargées avec succès :', data);
      },
      (error) => {
        console.error('Erreur lors de la récupération des tâches :', error);
      }
    );
  }

  /**
   * Ajouter une nouvelle tâche
   */
  addTask(): void {
    if (this.taskName.trim() && this.startDate && this.startTime) {
      const newTask: Task = {
        name: this.taskName,
        startDate: this.startDate,
        startTime: this.startTime,
        completed: false,
      };
       
      this.taskService.addTask(newTask).subscribe(
        (response: Task) => {
          this.tasks.push(newTask);
          this.isAvalible = true;
          this.loadTasks();
          this.resetInputFields();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la tâche :', error);
        }
      );
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }

  /**
   * Entrer en mode édition pour une tâche
   */
  toggleEditTask(index: number): void {
    if (this.isEditing && this.editingIndex === index) {
      // Confirmer la modification
      this.editTask();
    } else {
      // Passer en mode édition
      const taskToEdit = this.tasks[index];
      this.taskName = taskToEdit.name;
      this.startDate = taskToEdit.startDate;
      this.startTime = taskToEdit.startTime;
      this.isEditing = true;
      this.editingIndex = index;
    }
  }

  /**
   * Modifier une tâche
   */
  editTask(): void {
    if (this.editingIndex !== null && this.taskName.trim() && this.startDate && this.startTime) {
      const updatedTask: Task = {
        ...this.tasks[this.editingIndex], // Récupérer la tâche existante
        name: this.taskName,
        startDate: this.startDate,
        startTime: this.startTime,
      };
  
      if (!updatedTask ||!updatedTask._id) {
        console.error('Impossible de mettre à jour une tâche sans ID.');
        return;
      }
  
      this.taskService.updateTask(updatedTask).subscribe(
        (response: Task) => {
          this.tasks[this.editingIndex!] = response; // Mettre à jour la liste locale
          console.log('Tâche mise à jour avec succès :', response);
         
          this.isEditing = false;
          this.editingIndex = null;
          this.resetInputFields();
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de la tâche :', error);
        }
      );
    } else {
      alert('Veuillez remplir tous les champs avant de sauvegarder.');
    }
  }
  

  /**
   * Supprimer une tâche
   */
  deleteTask(index: number): void {
    const taskToDelete = this.tasks[index];
  
    if (!taskToDelete || !taskToDelete._id) {
      console.error('Impossible de supprimer une tâche sans ID.');
      return;
    }
  
    this.taskService.deleteTask(taskToDelete._id).subscribe(
      () => {
        this.tasks.splice(index, 1); // Supprime localement si le backend répond OK.
        console.log(`Tâche supprimée avec succès : ${taskToDelete._id}`);
        alert('voulez-vous vraiment supprimer cette tâche ?');
      },
      
      (error) => {
        console.error('Erreur lors de la suppression de la tâche :', error);
      }
    );
  }
  
  

  /**
   * Réinitialiser les champs d'entrée
   */
  resetInputFields(): void {
    this.taskName = '';
    this.startDate = '';
    this.startTime = '';
  }
}
