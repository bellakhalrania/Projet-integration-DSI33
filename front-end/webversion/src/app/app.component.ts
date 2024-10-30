import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminFrontComponent } from './layouts/admin-front/admin-front.component';
import { UserfrontComponent } from './layouts/userfront/userfront.component';

import { SigninComponentComponent } from './layouts/signin-component/signin-component.component';
import { HomeComponent } from './views/front/home/home.component';
import { AboutComponent } from './views/front/about/about.component';
import { RecourcesComponent } from './views/front/recources/recources.component';
import { WorkShopComponent } from './views/front/work-shop/work-shop.component';
import { RelaxComponent } from './views/front/relax/relax.component';
import { ArticlesComponent } from './views/front/articles/articles.component';
import { InitiativesComponent } from './views/front/initiatives/initiatives.component';
import { GroupsComponent } from './views/front/groups/groups.component';
import { QuizsComponent } from './views/front/quizs/quizs.component';

import { TodolisteComponent } from './layouts/views/user/todoliste/todoliste.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet,AdminFrontComponent,
    UserfrontComponent,HomeComponent,SigninComponentComponent,AboutComponent,
    RecourcesComponent,WorkShopComponent,RelaxComponent,ArticlesComponent,InitiativesComponent,GroupsComponent,QuizsComponent,ReactiveFormsModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webversion';
}
