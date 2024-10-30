import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface Task{
  name:string;
  startDate:string;
  startTime: string;
  completed: boolean ;
}
@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgIf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
Title="Add your Tasks";
title2 ="Tasks List";



taskName: string = '';
startDate: string = '';
startTime: string = '';
tasks: Task[]=[];
isAvalible :boolean = false;

currentPage: number = 1;
tasksPerPage: number = 5;

  addTask():void{
    if(this.taskName.trim() && this.startDate && this.startTime){
      const newTask : Task={
        name:this.taskName,
        startDate:this.startDate,
        startTime:this.startTime,
        completed:false
      };
      
      this.tasks.push(newTask);
      this.isAvalible =true;
   

      this.taskName= '';
      this.startDate ='';
      this.startTime ='';
    }
    else{
      alert('Veuillez remplir tous les champs.');
    }

  }
  isEditing = false;
  editingIndex: number | null = null;
  
  editTask(index: number) {
    let updatetask = this.tasks[index];
    this.taskName = updatetask.name;
    this.startDate = updatetask.startDate;
    this.startTime = updatetask.startTime;
  
    // Passe en mode édition
    this.isEditing = true;
    this.editingIndex = index;
  }
  
  saveTask() {
    // Vérifie si on est en mode édition
    if (this.isEditing && this.editingIndex !== null) {
      // Met à jour la tâche existante avec les nouvelles valeurs
      this.tasks[this.editingIndex] = {
        name: this.taskName,
        startDate: this.startDate,
        startTime: this.startTime,
        completed: this.tasks[this.editingIndex].completed
      };
  
      // Réinitialise les variables après modification
      this.isEditing = false;
      this.editingIndex = null;
    } else {
      // Ajoute une nouvelle tâche si on n'est pas en mode édition
      this.addTask();
    }
  
    // Réinitialise les champs de saisie
    this.taskName = '';
    this.startDate = '';
    this.startTime = '';
  }
  
  

  
  deleteTask(index:number){
    this.tasks.splice(index, 1);
  }


  // Pagination methods
  get paginatedTasks():Task[]{
    const startIndex = (this.currentPage-1)*this.tasksPerPage;
    const endIndex = startIndex + this.tasksPerPage;
    return this.tasks.slice(startIndex , endIndex);
  
  }
  changePage(page: number):void{
    if(page >=1 && page <= this.totalPages){
      this.currentPage=page;
    }
  }
  get totalPages():number{
     return Math.ceil(this.tasks.length/ this.tasksPerPage);
  }

}


