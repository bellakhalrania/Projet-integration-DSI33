import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdminFrontComponent } from './layouts/admin-front/admin-front.component';
import { UserfrontComponent } from './layouts/userfront/userfront.component';
import { HomeComponent } from './views/front/home/home.component';
import { AboutComponent } from './views/front/about/about.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthloginService } from './services/authlogin.service';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';









@Component({
  selector: 'app-root',
  standalone: true,


  imports: [RouterOutlet,HttpClientModule,AdminFrontComponent,
    CommonModule,UserregisterComponent,UserloginComponent,
    UserfrontComponent,HomeComponent,  AboutComponent,
    ReactiveFormsModule,
   
  
    
    
  ],
    providers: [AuthloginService,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webversion';
  
}
