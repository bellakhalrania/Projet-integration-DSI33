import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthloginService } from '../services/authlogin.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-userlogin',
  standalone: true,
  imports: [FormsModule,CommonModule,
    RouterModule
  ],
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {
  constructor( private ads:AuthloginService,private route:Router) { 
    console.log(this.ads.loggedIn)

  }
  messageErr=""
   dataReceived: any; 

   loginUser(f:any) {
    if (f.valid) {
      let data = f.value;
      console.log(data);
      this.ads.loginUser(data).subscribe((response) => {
        this.dataReceived = response;
        console.log(this.ads.loggedIn);
        this.route.navigate(['/']);
       
      }, (err: HttpErrorResponse) => {
        
        this.messageErr=err.error
      }); 
    } 
  }

}
