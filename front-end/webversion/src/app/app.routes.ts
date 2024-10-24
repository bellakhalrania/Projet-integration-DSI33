import { Routes } from '@angular/router';
import { UserLayoutsComponent } from './layouts/user-layouts/user-layouts.component';
import { AdminLayoutsComponent } from './layouts/admin-layouts/admin-layouts.component';
import { HomeComponent } from './layouts/user-layouts/home/home.component';


export const routes: Routes = [
    { path: "", component: HomeComponent },  
    { path: "user-layout", component: UserLayoutsComponent },   
    { path: "admin-layout", component: AdminLayoutsComponent}, 


    
      
];
