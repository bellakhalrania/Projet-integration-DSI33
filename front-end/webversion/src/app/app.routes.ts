import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminFrontComponent } from './layouts/admin-front/admin-front.component';
import { UserfrontComponent } from './layouts/userfront/userfront.component';

import { LoginComponent } from './layouts/login/login.component';



import { HomeComponent } from './views/front/home/home.component';
import { AboutComponent } from './views/front/about/about.component';

import { EventsComponent } from './views/front/events/events.component';


import { ContactComponent } from './views/front/contact/contact.component';



import { ClientComponent } from './layouts/client/client.component';









export const routes: Routes = [
    { path:'',component:UserfrontComponent,children: [
       {path:'',loadComponent:()=>import('./views/front/home/home.component').then(c=>c.HomeComponent)},
       {path:'about',loadComponent:()=>import('./views/front/about/about.component').then(c=>c.AboutComponent)},
       {path:'events',loadComponent:()=>import('./views/front/events/events.component').then(c=>c.EventsComponent)},
       {path:'contact',loadComponent:()=>import('./views/front/contact/contact.component').then(c=>c.ContactComponent)},
    ]}

 


    { path:'client',component:ClientComponent,children: [
        {path:'acceuil',loadComponent:()=>import('./views/user/acceuil/acceuil.component').then(c=>c.AcceuilComponent)},
        {path:'events',loadComponent:()=>import('./views/user/evenement/evenement.component').then(c=>c.EvenementComponent)},
        {path:'contact',loadComponent:()=>import('./views/user/contact-us/contact-us.component').then(c=>c.ContactUsComponent)},
        {path:'about',loadComponent:()=>import('./views/user/about-us/about-us.component').then(c=>c.AboutUsComponent)},
        {path:'groups',loadComponent:()=>import('./views/user/groups/groups.component').then(c=>c.GroupsComponent)},
        {path:'worckshop',loadComponent:()=>import('./views/user/worckshop/worckshop.component').then(c=>c.WorckshopComponent)},
        {path:'todo-list',loadComponent:()=>import('./views/user/todo-list/todo-list.component').then(c=>c.TodoListComponent)},

        ]}

    

    ,{path:'admin',component:AdminFrontComponent},{path:'login',component:LoginComponent}


];
