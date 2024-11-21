import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdminFrontComponent } from './layouts/admin-front/admin-front.component';
import { UserfrontComponent } from './layouts/userfront/userfront.component';

import { HomeComponent } from './views/front/home/home.component';
import { AboutComponent } from './views/front/about/about.component';
import { ContactComponent } from './views/front/contact/contact.component';


import { ToastrModule } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { ClientComponent } from './layouts/client/client.component';
import { GroupsComponent } from './views/user/groups/groups.component';
import { WorckshopComponent } from './views/user/worckshop/worckshop.component';
import { TodoListComponent } from './views/user/todo-list/todo-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './layouts/login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { AuthloginService } from './services/authlogin.service';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';

import { ExercicesComponent } from './views/user/exercices/exercices.component';








@Component({
  selector: 'app-root',
  standalone: true,


  imports: [RouterOutlet,HttpClientModule,AdminFrontComponent,
    CommonModule,UserregisterComponent,UserloginComponent,
    UserfrontComponent,HomeComponent,  AboutComponent,
    ReactiveFormsModule,
          RouterModuleLoginComponent,
    AboutComponent,ContactComponent,
    ClientComponent,GroupsComponent,WorckshopComponent,
    TodoListComponent,AboutComponent,ContactComponent,
    
    
  ],
    providers: [AuthloginService,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webversion';
  
}
