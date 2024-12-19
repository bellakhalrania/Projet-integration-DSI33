import { Routes } from '@angular/router';
import { AdminFrontComponent } from './layouts/admin-front/admin-front.component';
import { UserfrontComponent } from './layouts/userfront/userfront.component';
import { ClientComponent } from './layouts/client/client.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { ChatBotComponent } from './layouts/chat-bot/chat-bot.component';
import { AuthGuard } from './services/guard/auth.guard';
import { UnauthorizedAccessComponent } from './layouts/unauthorized-access/unauthorized-access.component';

export const routes: Routes = [
  { 
    path: '',
    component: UserfrontComponent,
    children: [
      { path: '', loadComponent: () => import('./views/front/home/home.component').then(c => c.HomeComponent) },
      { path: 'about', loadComponent: () => import('./views/front/about/about.component').then(c => c.AboutComponent) },
      { path: 'contact', loadComponent: () => import('./views/front/contact/contact.component').then(c => c.ContactComponent) },
    ]
  },

  { 
    path: 'client', 
    component: ClientComponent, 
    canActivate: [AuthGuard], data: { roles: ['ROLE_USER'] },
    children: [
      { path: 'acceuil', loadComponent: () => import('./views/user/acceuil/acceuil.component').then(c => c.AcceuilComponent),
        canActivate: [AuthGuard], data: { roles: ['ROLE_USER', 'ROLE_ADMIN'] } },
      { path: 'events', loadComponent: () => import('./views/user/evenement/evenement.component').then(c => c.EvenementComponent),
        canActivate: [AuthGuard], data: { roles: ['ROLE_USER'] } },
      { path: 'contact', loadComponent: () => import('./views/user/contact-us/contact-us.component').then(c => c.ContactUsComponent) },
      { path: 'about', loadComponent: () => import('./views/user/about-us/about-us.component').then(c => c.AboutUsComponent),
        canActivate: [AuthGuard], data: { roles: ['ROLE_USER'] } },
      { path: 'groups', loadComponent: () => import('./views/user/groups/groups.component').then(c => c.GroupsComponent),
        canActivate: [AuthGuard], data: { roles: ['ROLE_USER'] } },
    
      { path: 'todo-list', loadComponent: () => import('./views/user/todo-list/todo-list.component').then(c => c.TodoListComponent),
        canActivate: [AuthGuard], data: { roles: ['ROLE_USER'] } },
      { path: 'anxiety-quiz', loadComponent: () => import('./views/user/anxiety-quiz/anxiety-quiz.component').then(c => c.AnxietyQuizComponent),
        canActivate: [AuthGuard], data: { roles: ['ROLE_USER'] } },
      { path: 'depression-quiz', loadComponent: () => import('./views/user/depression-quiz/depression-quiz.component').then(c => c.DepressionQuizComponent),
        canActivate: [AuthGuard], data: { roles: ['ROLE_USER'] } },
      { path: 'adhd-quiz', loadComponent: () => import('./views/user/adhd-quiz/adhd-quiz.component').then(c => c.AdhdQuizComponent),
        canActivate: [AuthGuard], data: { roles: ['ROLE_USER'] } },
      { path: 'quiz', loadComponent: () => import('./views/user/quiz/quiz.component').then(c => c.QuizComponent),
        canActivate: [AuthGuard], data: { roles: ['ROLE_USER'] } },
    ]
  },

  { path: 'chat-bot', component: ChatBotComponent },

  { 
    path: 'admin',
    component: AdminFrontComponent,
    canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] } ,
    children: [
      { path: 'ajouter-exercice', loadComponent: () => import('./views/admin/ajouter-exercice/ajouter-exercice.component').then(c => c.AjouterExerciceComponent),
        canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] } },
      { path: 'list-exercices', loadComponent: () => import('./views/admin/list-exercices/list-exercices.component').then(c => c.ListExercicesComponent),
        canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] } },
      { path: 'ajouter-group', loadComponent: () => import('./views/admin/ajouter-group/ajouter-group.component').then(c => c.AjouterGroupComponent),
        canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] } },
      { path: 'list-groups', loadComponent: () => import('./views/admin/list-groups/list-groups.component').then(c => c.ListGroupsComponent),
        canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] } },
    ]
  },
  { path: 'unauthorized', component: UnauthorizedAccessComponent },
  // Add your login and register paths
  //{ path: 'login', component: UserloginComponent },
  //{ path: 'register', component: UserregisterComponent },

  // Redirect to login if no route matches
  { path: '**', redirectTo: 'login' }
];
