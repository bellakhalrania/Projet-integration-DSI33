import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import Validation from './utils/validation';

@Component({
  selector: 'app-signup-component',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './signup-component.component.html',
  styleUrl: './signup-component.component.css'
})
export class SignupComponentComponent {
  forminput!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  signupForm!:FormGroup;

  ngOnInit(): void {
      this.signupForm = this.formBuilder.group({
        'firstName': ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+"), Validators.maxLength(10)]],
        'lastName': ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+"), Validators.maxLength(10)]],
        'email': ['', [Validators.required, Validators.email]],
        'password': [
          '',
          [
            Validators.required,
            Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/),
            Validators.maxLength(10)
          ]
        ],
        'confirmPassword': ['', [Validators.required]],
        'phone': ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(8)]],
      }, {
        validators: [Validation.match('password', 'confirmPassword')]
      });
    }
  
    clearform(): void {
      this.signupForm.reset();
    }

  }

