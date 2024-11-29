import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ExerciceService } from '../../../services/exercice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Injectable({
  providedIn: 'any'
})



@Component({
  selector: 'app-list-exercices',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './list-exercices.component.html',
  styleUrl: './list-exercices.component.css'
})
export class ListExercicesComponent implements OnInit {

  dataArray : any=[];
  dataExercice={ 
    title:'',
    type:'',
    description:'',
    duree:'',
    creationDate:'',
    image_path:'',
    id:''
  }



 
  messageErr=''

  messageSuccess=''


  constructor(private ds:ExerciceService) {
    this.ds.getAllExercices().subscribe(data=>{
    this.dataArray=data  
    console.log(data);
    })
   }

   deleteExercice(id:any,i:number){
    this.ds.deleteExercice(id).subscribe(response=>{
    console.log(response)
    this.dataArray.splice(i,1)})
    
  }



  getdata(title: string, type: string, description: string, duree: string, creationDate: string, image_path: string, id: any) {
    console.log('Data passed to getdata:', { title, type, description, duree, creationDate, image_path, id });
    this.messageSuccess = '';
    this.dataExercice.title = title;
    this.dataExercice.type = type;
    this.dataExercice.description = description;
    this.dataExercice.duree = duree;
    this.dataExercice.creationDate = creationDate;
    this.dataExercice.image_path = image_path;
    this.dataExercice.id = id;
  }
  

  update(f: any) {
    let data= f.value
    this.ds.editExercice(this.dataExercice.id,data).subscribe(
      response=>{
        console.log(response)
        let indexid = this.dataArray.findIndex((obj: any) => obj.id == this.dataExercice.id);
        if (indexid !== -1 && this.dataArray[indexid]) {
          this.dataArray[indexid].title = data.title;
          this.dataArray[indexid].type = data.type;
          this.dataArray[indexid].description = data.description;
          this.dataArray[indexid].duree = data.duree;
          this.dataArray[indexid].creationDate = data.creationDate;
          this.dataArray[indexid].image_path = data.image_path;
       
          this.messageSuccess = ` exercice modifé`;
        } else {
          console.error('Error: Invalid index or dataArray element is undefined.');
        }
        
      }
      ,(error:HttpErrorResponse)=>{
        console.log(error.message)})
   
  }





















  
  ngOnInit(): void {
  }

}

