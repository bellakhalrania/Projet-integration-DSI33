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
    imagePath:'',
    videourl:'',
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


  getdata(title: string, type: string, description: string, duree: string, creationDate: string,videourl:string, imagePath: string, id: any) {
    console.log('Data passed to getdata:', { title, type, description, duree, creationDate, imagePath,videourl, id });
    console.log('Image URL:', imagePath); 
    this.messageSuccess = '';
    this.dataExercice.title = title;
    this.dataExercice.type = type;
    this.dataExercice.description = description;
    this.dataExercice.duree = duree;
    this.dataExercice.creationDate = creationDate;
    this.dataExercice.imagePath = imagePath;
    this.dataExercice.videourl=videourl;
    this.dataExercice.id = id;
  }
  


  selectedFile: File | null = null; // Variable pour stocker le fichier sélectionné

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      
      
      const reader = new FileReader();
      reader.onload = () => {
        this.dataExercice.imagePath = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
  


  update(f: any) {
    const formData = new FormData();
    formData.append('title', this.dataExercice.title);
    formData.append('type', this.dataExercice.type);
    formData.append('description', this.dataExercice.description);
    formData.append('duree', this.dataExercice.duree);
    formData.append('creationDate', this.dataExercice.creationDate);
    formData.append('videourl', this.dataExercice.videourl);
  
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }
  
    this.ds.editExercice(this.dataExercice.id, formData).subscribe(
      response => {
        console.log(response);
        this.messageSuccess = `Exercice modifié`;
        // Mettre à jour la vue
      },
      (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    );
    console.log('FormData:', this.dataExercice);
  }
  
  ngOnInit(): void {
  }

  logImageError(imagePath: string) {
    console.error('Image failed to load:', imagePath);
  }

 

  
}

