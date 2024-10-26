import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TodolistComponent } from './todo/todolist/todolist.component';

@Component({
  selector: 'app-userfront',
  standalone: true,
  imports: [RouterModule,RouterOutlet,
    RouterLink,
    TodolistComponent

  ],
  templateUrl: './userfront.component.html',
  styleUrl: './userfront.component.css'
})
export class UserfrontComponent {

}
