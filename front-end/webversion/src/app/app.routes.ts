import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminFrontComponent } from './layouts/admin-front/admin-front.component';
import { UserfrontComponent } from './layouts/userfront/userfront.component';
import { ClientComponent } from './layouts/client/client.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { ChatBotComponent } from './layouts/chat-bot/chat-bot.component';




export const routes: Routes = [
    { path:'',component:UserfrontComponent,children: [
       {path:'',loadComponent:()=>import('./views/front/home/home.component').then(c=>c.HomeComponent)},
       {path:'about',loadComponent:()=>import('./views/front/about/about.component').then(c=>c.AboutComponent)},
       {path:'contact',loadComponent:()=>import('./views/front/contact/contact.component').then(c=>c.ContactComponent)},
       
    ]},


    { path:'client',component:ClientComponent,children: [
        {path:'acceuil',loadComponent:()=>import('./views/user/acceuil/acceuil.component').then(c=>c.AcceuilComponent)},
        {path:'events',loadComponent:()=>import('./views/user/evenement/evenement.component').then(c=>c.EvenementComponent)},
        {path:'contact',loadComponent:()=>import('./views/user/contact-us/contact-us.component').then(c=>c.ContactUsComponent)},
        {path:'about',loadComponent:()=>import('./views/user/about-us/about-us.component').then(c=>c.AboutUsComponent)},
        {path:'groups',loadComponent:()=>import('./views/user/groups/groups.component').then(c=>c.GroupsComponent)},
        {path:'worckshop',loadComponent:()=>import('./views/user/worckshop/worckshop.component').then(c=>c.WorckshopComponent)},
        {path:'todo-list',loadComponent:()=>import('./views/user/todo-list/todo-list.component').then(c=>c.TodoListComponent)},
        {path:'anxiety-quiz',loadComponent:()=>import('./views/user/anxiety-quiz/anxiety-quiz.component').then(c=>c.AnxietyQuizComponent)},
        {path:'depression-quiz',loadComponent:()=>import('./views/user/depression-quiz/depression-quiz.component').then(c=>c.DepressionQuizComponent)},
        {path:'adhd-quiz',loadComponent:()=>import('./views/user/adhd-quiz/adhd-quiz.component').then(c=>c.AdhdQuizComponent)},
        {path:'quiz',loadComponent:()=>import('./views/user/quiz/quiz.component').then(c=>c.QuizComponent)},

        ]},

        {path:"admin",component:AdminFrontComponent},
        {path:"login",component:UserloginComponent},
        {path:"register",component:UserregisterComponent},
        {path:"chat-bot",component:ChatBotComponent},




];
