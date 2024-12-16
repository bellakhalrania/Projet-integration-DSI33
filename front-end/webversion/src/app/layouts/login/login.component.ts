import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Validation from '../../../utils/validation';
import { AuthService } from '../../services/auth.service';

import { Router, RouterModule } from '@angular/router';
declare const google: any;

import { AuthloginService } from '../../services/authlogin.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-login',
  standalone: true,

  imports: [CommonModule, ReactiveFormsModule, RouterModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  messageErr="";


  loginForm!: FormGroup;
  signupForm!: FormGroup;


 

  constructor(private ds:AuthloginService,private formBuilder: FormBuilder,private authService: AuthService) {}

  register(f:any){
    let data=f.value
  //console.log(data)
  this.ds.registerUser(data).subscribe(response=>{
    //console.log(response)
   // this.route.navigate(['loginuser'])
    
  },(err:HttpErrorResponse)=>{
    this.messageErr=err.error
    //console.log(err.error)
    
  })
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      loginEmail: ['', [Validators.required, Validators.email]],
      loginPassword: ['', Validators.required],
    });

    this.signupForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+"), Validators.maxLength(10)]],
        username: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+"), Validators.maxLength(10)]],
        email: ['', [Validators.required, Validators.email]],
        address: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(8)]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/),
            Validators.maxLength(10),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  clearform(): void {
    this.signupForm.reset();
  }
  loginWithFacebook() {
    this.authService.loginWithFacebook();
}
 
}
