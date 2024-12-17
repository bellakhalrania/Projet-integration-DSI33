import { APP_INITIALIZER, Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdminFrontComponent } from './layouts/admin-front/admin-front.component';
import { UserfrontComponent } from './layouts/userfront/userfront.component';
import { HomeComponent } from './views/front/home/home.component';
import { AboutComponent } from './views/front/about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './views/user/todo-list/todo-list.component';
import { ExercicesComponent } from './views/user/exercices/exercices.component';
import { AjouterExerciceComponent } from './views/admin/ajouter-exercice/ajouter-exercice.component';
import { GroupsComponent } from './views/user/groups/groups.component';
import { WorckshopComponent } from './views/user/worckshop/worckshop.component';
import { ClientComponent } from './layouts/client/client.component';
import { ContactComponent } from './views/front/contact/contact.component';

import { AuthloginService } from './services/authlogin.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AdminFrontComponent,
    CommonModule,
    HttpClientModule,
    UserfrontComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ClientComponent,
    GroupsComponent,
    WorckshopComponent,
    TodoListComponent,
    ExercicesComponent,
    AjouterExerciceComponent
  ],
  providers: [
    AuthloginService,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected here
})
export class AppComponent {
  title = 'webversion';

}
