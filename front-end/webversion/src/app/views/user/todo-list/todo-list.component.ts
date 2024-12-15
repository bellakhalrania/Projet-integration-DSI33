import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarClientComponent } from "../navbar-client/navbar-client.component";
import { TasksService } from "../../../services/tasks.service";

interface Task {
  _id?: string;
  name: string;
  startDate: string;
  startTime: string;
  completed: boolean;
}

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgIf,
    NavbarClientComponent,
    NgClass
  ],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(private taskService: TasksService) {}

  Title = "Add your Tasks";
  title2 = "Tasks List";

  taskName: string = '';
  startDate: string = '';
  startTime: string = '';
  tasks: Task[] = [];
  toasts: { message: string; type: string; duration: number }[] = []; // Liste pour stocker les toasts

  isEditing = false;
  editingIndex: number | null = null;

 

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks(): void {
    this.taskService.getTasks().subscribe(
      (data: Task[]) => {
        this.tasks = data;
        this.showToast('Tâches chargées avec succès!', 'info');
      },
      (error) => {
        console.error("Erreur lors de la récupération des tâches :", error);
        this.showToast('Erreur de chargement des tâches.', 'error');
      }
    );
  }

  addtask(): void {
    if (this.taskName.trim() && this.startDate && this.startTime) {
      const newTask: Task = {
        name: this.taskName,
        startDate: this.startDate,
        startTime: this.startTime,
        completed: false,
      };
      

      this.taskService.addTask(newTask).subscribe(
       
        () => {
          console.log(newTask),
          this.showToast('Tâche ajoutée avec succès!', 'success');
         
          this.getAllTasks();

          this.resetFields();
        },
        (error) => {
          this.showToast('Erreur lors de l\'ajout de la tâche.', 'error');
          console.error("Erreur lors de l'ajout de la tâche :", error);
          
        }
      );
    } else {
      this.showToast('Veuillez remplir tous les champs.', 'warning');
    }
  }

  toggleEditTask(index: number): void {
    if (this.isEditing && this.editingIndex === index) {
      this.saveTask();
    } else {
      this.editTask(index);
    }
  }

  editTask(index: number): void {
    const taskToEdit = this.tasks[index];
    this.taskName = taskToEdit.name;
    this.startDate = taskToEdit.startDate;
    this.startTime = taskToEdit.startTime;

    this.isEditing = true;
    this.editingIndex = index;
  }

  saveTask(): void {
    if (this.isEditing && this.editingIndex !== null) {
      const updatedTask: Task = {
        ...this.tasks[this.editingIndex],
        name: this.taskName,
        startDate: this.startDate,
        startTime: this.startTime,
      };

      this.taskService.updateTask(updatedTask).subscribe(
        () => {
          this.showToast('Tâche mise à jour avec succès!', 'info');
          this.getAllTasks();
          this.resetFields();
          this.isEditing = false;
          this.editingIndex = null;
        },
        (error) => {
          console.error("Erreur lors de la mise à jour de la tâche :", error);
          this.showToast('Erreur lors de la mise à jour de la tâche.', 'error');
        }
      );
    }
  }

  deleteTask(index: number): void {
    const taskToDelete = this.tasks[index];
    if (taskToDelete._id) {
      this.taskService.deleteTask(taskToDelete._id).subscribe(
        () => {
          this.showToast('Tâche supprimée avec succès!', 'warning');
          this.getAllTasks();
        },
        (error) => {
          console.error("Erreur lors de la suppression de la tâche :", error);
          this.showToast('Erreur lors de la suppression de la tâche.', 'error');
        }
      );
    }
  }

  resetFields(): void {
    this.taskName = '';
    this.startDate = '';
    this.startTime = '';
  }

  showToast(message: string, type: 'success' | 'error' | 'info' | 'warning'): void {
    this.toasts.push({ message, type, duration: 3000 });
    setTimeout(() => this.removeToast(message), 3000);
  }

  removeToast(message: string): void {
    this.toasts = this.toasts.filter(toast => toast.message !== message);
  }
}