import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Validation from '../../../utils/validation';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  signupForm!: FormGroup;
 loginEmail:string=""
 loginPassword:string=""
name:string=""
phone:string=""
 address:string=""
 confirmPassword:string=""


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      loginEmail: ['', [Validators.required, Validators.email]],
      loginPassword: [
        '',
        [
          Validators.required,
   
        ]
      ]
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
            Validators.maxLength(10)
          ]
        ],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }
  clearform(): void {
    this.signupForm.reset();
  }
}