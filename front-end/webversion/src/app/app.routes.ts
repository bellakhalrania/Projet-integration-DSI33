import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminFrontComponent } from './layouts/admin-front/admin-front.component';
import { UserfrontComponent } from './layouts/userfront/userfront.component';
import { SigninComponentComponent } from './layouts/signin-component/signin-component.component';
import { HomeComponent } from './views/front/home/home.component';
import { AboutComponent } from './views/front/about/about.component';
import { EventsComponent } from './views/front/events/events.component';
import { ArticlesComponent } from './views/front/articles/articles.component';
import { ContactComponent } from './views/front/contact/contact.component';
import { GroupsComponent } from './views/front/groups/groups.component';
import { InitiativesComponent } from './views/front/initiatives/initiatives.component';
import { QuizsComponent } from './views/front/quizs/quizs.component';
import { RelaxComponent } from './views/front/relax/relax.component';
import { WorkShopComponent } from './views/front/work-shop/work-shop.component';





export const routes: Routes = [
   {path:'',component:UserfrontComponent,children: [
    {path:'home',loadComponent:()=>import('./views/front/home/home.component').then(c=>c.HomeComponent)},
    {path:'about',loadComponent:()=>import('./views/front/about/about.component').then(c=>c.AboutComponent)},
    {path:'events',loadComponent:()=>import('./views/front/events/events.component').then(c=>c.EventsComponent)},
    {path:'workShop',loadComponent:()=>import('./views/front/work-shop/work-shop.component').then(c=>c.WorkShopComponent)},
    {path:'groups',loadComponent:()=>import('./views/front/groups/groups.component').then(c=>c.GroupsComponent)},
    {path:'quizs',loadComponent:()=>import('./views/front/quizs/quizs.component').then(c=>c.QuizsComponent)},
    {path:'relax',loadComponent:()=>import('./views/front/relax/relax.component').then(c=>c.RelaxComponent)},
    {path:'resources',loadComponent:()=>import('./views/front/recources/recources.component').then(c=>c.RecourcesComponent)},
    {path:'articles',loadComponent:()=>import('./views/front/articles/articles.component').then(c=>c.ArticlesComponent)},
    {path:'initiatives',loadComponent:()=>import('./views/front/initiatives/initiatives.component').then(c=>c.InitiativesComponent)},
    {path:'contact',loadComponent:()=>import('./views/front/contact/contact.component').then(c=>c.ContactComponent)},
    
   ]},


  
  



    {path:'admin',component:AdminFrontComponent},
    {path:'signin',component:SigninComponentComponent}
   
];
