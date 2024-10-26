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
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
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
      console.log(newTask);
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
  editTask(index:number){

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
