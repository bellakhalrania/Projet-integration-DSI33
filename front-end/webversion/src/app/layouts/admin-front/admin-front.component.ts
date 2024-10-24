import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-front',
  standalone: true,
  imports: [RouterModule,RouterLink,RouterOutlet],
  templateUrl: './admin-front.component.html',
  styleUrl: './admin-front.component.css'
})
export class AdminFrontComponent {

}
