import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarClientComponent } from '../navbar-client/navbar-client.component';


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
    NgIf,
    NgClass,
    NavbarClientComponent,
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
  
  toggleEditTask(index: number) {
    if (this.isEditing && this.editingIndex === index) {
      // Sauvegarde les modifications
      this.tasks[this.editingIndex] = {
        name: this.taskName,
        startDate: this.startDate,
        startTime: this.startTime,
        completed: this.tasks[this.editingIndex].completed
      };
  
      // Réinitialise les variables après modification
      this.isEditing = false;
      this.editingIndex = null;
      this.resetInputFields();
    } else {
      // Charge les données de la tâche dans les champs d'entrée pour la modification
      let updatetask = this.tasks[index];
      this.taskName = updatetask.name;
      this.startDate = updatetask.startDate;
      this.startTime = updatetask.startTime;
  
      // Passe en mode édition
      this.isEditing = true;
      this.editingIndex = index;
    }
  }
  
  resetInputFields() {
    this.taskName = '';
    this.startDate = '';
    this.startTime = '';
  }
  

  
  deleteTask(index:number){
    this.tasks.splice(index, 1);
  }


  // Pagination methods
}


