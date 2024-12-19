import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdminFrontComponent } from './layouts/admin-front/admin-front.component';
import { UserfrontComponent } from './layouts/userfront/userfront.component';
import { HomeComponent } from './views/front/home/home.component';
import { AboutComponent } from './views/front/about/about.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';






import { AuthloginService } from './services/authlogin.service';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';



import { LoginComponent } from './layouts/login/login.component';
import { ChatBotComponent } from './layouts/chat-bot/chat-bot.component';
import { AjouterExerciceComponent } from './views/admin/ajouter-exercice/ajouter-exercice.component';
import { ExercicesComponent } from './views/user/exercices/exercices.component';
import { TodoListComponent } from './views/user/todo-list/todo-list.component';
import { WorckshopComponent } from './views/user/worckshop/worckshop.component';
import { ContactComponent } from './views/front/contact/contact.component';
import { GroupsComponent } from './views/user/groups/groups.component';
import { ClientComponent } from './layouts/client/client.component';
import { VideoPlayerComponent } from './views/user/video-player/video-player.component';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, CommonModule, HttpClientModule,
    UserfrontComponent, HomeComponent, LoginComponent,
    AboutComponent, ContactComponent,
    ClientComponent, GroupsComponent, WorckshopComponent, TodoListComponent, ExercicesComponent, AjouterExerciceComponent, ChatBotComponent,ExercicesComponent,VideoPlayerComponent],

 

    providers: [AuthloginService,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webversion';
  
}
