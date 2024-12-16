import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthloginService } from '../services/authlogin.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-userregister',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './userregister.component.html',
  styleUrl: './userregister.component.css'
})
export class UserregisterComponent {

  messageErr=""


  constructor(private ads:AuthloginService,
  private route:Router) {
  }
  register(f:any){
    let data=f.value
    console.log(data)
    this.ads.registerUser(data).subscribe(response=>{
      console.log(response)
      this.route.navigate(['login'])
      
    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      
      
    })
  
   }



}
