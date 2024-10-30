import { Component } from '@angular/core';
import { FooterClientComponent } from "../../views/user/footer-client/footer-client.component";
import { NavbarClientComponent } from "../../views/user/navbar-client/navbar-client.component";
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink, FooterClientComponent, NavbarClientComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

}
