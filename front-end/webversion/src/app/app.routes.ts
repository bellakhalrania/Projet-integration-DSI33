import { Routes } from '@angular/router';
import { AdminFrontComponent } from './layouts/admin-front/admin-front.component';
import { UserfrontComponent } from './layouts/userfront/userfront.component';
import { LoginComponent } from './layouts/login/login.component';




export const routes: Routes = [
    {path:'',component:UserfrontComponent,children:[
        {path:'to',loadComponent:()=>import('./layouts/views/user/todoliste/todoliste.component').then(c=>c.TodolisteComponent)}
       
    ]}
    
    ,{path:'admin',component:AdminFrontComponent},{path:'login',component:LoginComponent}

];
