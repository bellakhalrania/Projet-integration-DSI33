import { CommonModule } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GroupService } from '../../../services/group.service';
import { HttpErrorResponse } from '@angular/common/http';






@Injectable({
  providedIn: 'any'
})

@Component({
  selector: 'app-list-groups',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './list-groups.component.html',
  styleUrl: './list-groups.component.css'
})
export class ListGroupsComponent implements OnInit{

  dataArray : any=[];
  dataExercice={ 
    name:'',
    groupUrl:'',
    imagePath:'',
    id:''
  }

  messageErr=''

  messageSuccess=''

  constructor(private ds:GroupService) {
    this.ds.getAllGroups().subscribe(data=>{
    this.dataArray=data  
    console.log(data);
    })
   }

  deleteGroup(id:any,i:number){
    this.ds.deleteGroup(id).subscribe(response=>{
    console.log(response)
    this.dataArray.splice(i,1)})
    
  }

  getdata(name: string, groupUrl: string,imagePath: string, id: any) {
    console.log('Data passed to getdata:', { name, groupUrl,imagePath,id });
    console.log('Image URL:', imagePath); 
    this.messageSuccess = '';
    this.dataExercice.name = name;
    this.dataExercice.groupUrl = groupUrl;
    console.log('groupUrl:', groupUrl);
    this.dataExercice.imagePath = imagePath;
    this.dataExercice.id = id;
  }

  selectedFile: File | null = null; 

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
    formData.append('name', this.dataExercice.name);
    formData.append('groupUrl', this.dataExercice.groupUrl);
  
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }
  
    this.ds.editGroup(this.dataExercice.id, formData).subscribe(
      response => {
        console.log(response);
        this.messageSuccess = `Group modifié`;
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
