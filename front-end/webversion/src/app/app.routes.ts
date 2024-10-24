import { Routes } from '@angular/router';
import { AdminFrontComponent } from './layouts/admin-front/admin-front.component';
import { UserfrontComponent } from './layouts/userfront/userfront.component';




export const routes: Routes = [
    {path:'',component:UserfrontComponent}
    ,{path:'admin',component:AdminFrontComponent}
];
