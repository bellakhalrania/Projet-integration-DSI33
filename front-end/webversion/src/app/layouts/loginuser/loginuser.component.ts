import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthloginService } from '../../services/authlogin.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-loginuser',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './loginuser.component.html',
  styleUrl: './loginuser.component.css'
})
export class LoginuserComponent {
 
userData={
  username:'',
  email:'',
  password:'',
}
myForm: any;

  constructor() { }

  register(f: any) {
    let data = f.value;
    console.log(data);
  }

}
