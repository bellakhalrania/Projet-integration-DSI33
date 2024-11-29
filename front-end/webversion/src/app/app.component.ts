import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminFrontComponent } from './layouts/admin-front/admin-front.component';
import { UserfrontComponent } from './layouts/userfront/userfront.component';

import { HomeComponent } from './views/front/home/home.component';
import { AboutComponent } from './views/front/about/about.component';
import { ContactComponent } from './views/front/contact/contact.component';






import { ClientComponent } from './layouts/client/client.component';
import { GroupsComponent } from './views/user/groups/groups.component';
import { WorckshopComponent } from './views/user/worckshop/worckshop.component';
import { TodoListComponent } from './views/user/todo-list/todo-list.component';




import { CommonModule } from '@angular/common';
import { LoginComponent } from './layouts/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ExercicesComponent } from './views/user/exercices/exercices.component';
import { AjouterExerciceComponent } from './views/admin/ajouter-exercice/ajouter-exercice.component';







@Component({
  selector: 'app-root',
  standalone: true,


  imports: [RouterOutlet,AdminFrontComponent,CommonModule, HttpClientModule,
    UserfrontComponent,HomeComponent,LoginComponent,
    AboutComponent,ContactComponent,
    ClientComponent,GroupsComponent,WorckshopComponent,TodoListComponent,ExercicesComponent,AjouterExerciceComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webversion';
  
}
