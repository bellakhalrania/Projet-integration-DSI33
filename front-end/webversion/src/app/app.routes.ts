import { Routes } from '@angular/router';
import { AdminFrontComponent } from './layouts/admin-front/admin-front.component';
import { UserfrontComponent } from './layouts/userfront/userfront.component';
import { LoginComponent } from './layouts/login/login.component';
import { SigninComponentComponent } from './signin-component/signin-component.component';
import { SignupComponentComponent } from './layouts/signup-component/signup-component.component';




export const routes: Routes = [
    {path:'',component:UserfrontComponent,children:[
        {path:'to',loadComponent:()=>import('./layouts/views/user/todoliste/todoliste.component').then(c=>c.TodolisteComponent)}
       
    ]}
    
    ,{path:'admin',component:AdminFrontComponent},{path:'login',component:LoginComponent}
,{path:"signup",component:SignupComponentComponent}
];
