import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminFrontComponent } from './layouts/admin-front/admin-front.component';
import { UserfrontComponent } from './layouts/userfront/userfront.component';

import { HomeComponent } from './views/front/home/home.component';
import { AboutComponent } from './views/front/about/about.component';
import { EventsComponent } from './views/front/events/events.component';
import { ContactComponent } from './views/front/contact/contact.component';



import {  FormsModule} from '@angular/forms';


import { ClientComponent } from './layouts/client/client.component';
import { GroupsComponent } from './views/user/groups/groups.component';
import { WorckshopComponent } from './views/user/worckshop/worckshop.component';
import { TodoListComponent } from './views/user/todo-list/todo-list.component';


import { HttpClientModule } from '@angular/common/http';
import { LoginuserComponent } from './layouts/loginuser/loginuser.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './layouts/login/login.component';





@Component({
  selector: 'app-root',
  standalone: true,

  imports: [ RouterOutlet,
    AdminFrontComponent,
    UserfrontComponent,
    HomeComponent,
    HttpClientModule,
  CommonModule,
    LoginuserComponent,
    LoginComponent,
    AboutComponent,
   // ReactiveFormsModule,
    EventsComponent,
    ContactComponent,
    ClientComponent,
    GroupsComponent,
    WorckshopComponent,
    TodoListComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webversion';
  
}
