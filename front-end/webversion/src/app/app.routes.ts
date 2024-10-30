import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminFrontComponent } from './layouts/admin-front/admin-front.component';
import { UserfrontComponent } from './layouts/userfront/userfront.component';


import { HomeComponent } from './views/front/home/home.component';
import { AboutComponent } from './views/front/about/about.component';
import { ContactComponent } from './views/front/contact/contact.component';


import { SigninComponentComponent } from './layouts/signin-component/signin-component.component';
import { SignupComponentComponent } from './layouts/signup-component/signup-component.component';








export const routes: Routes = [
    { path:'',component:UserfrontComponent,children: [
    {path:'home',loadComponent:()=>import('./views/front/home/home.component').then(c=>c.HomeComponent)},
    {path:'todoliste',loadComponent:()=>import('./layouts/userfront/todo/todolist/todolist.component').then(c=>c.TodolistComponent)},
    {path:'about',loadComponent:()=>import('./views/front/about/about.component').then(c=>c.AboutComponent)},
    {path:'events',loadComponent:()=>import('./views/front/events/events.component').then(c=>c.EventsComponent)},

    {path:'contact',loadComponent:()=>import('./views/front/contact/contact.component').then(c=>c.ContactComponent)},
    ]}

    ,{path:'admin',component:AdminFrontComponent}
    ,{path:'login',component:SignupComponentComponent}
    ,{path:'signin',component:SigninComponentComponent},

    

];
