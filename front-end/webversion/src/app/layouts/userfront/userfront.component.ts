import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-userfront',
  standalone: true,
  imports: [RouterModule,RouterOutlet,RouterLink],
  templateUrl: './userfront.component.html',
  styleUrl: './userfront.component.css'
})
export class UserfrontComponent {

}
