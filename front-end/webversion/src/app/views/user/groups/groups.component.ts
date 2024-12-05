import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { GroupService } from '../../../services/group.service';
@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent {

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


  ngOnInit(): void {
    
  }

}







 
 


