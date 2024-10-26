import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../views/front/footer/footer.component";
import { NavbarComponent } from "../../views/front/navbar/navbar.component";
import { HomeComponent } from "../../views/front/home/home.component";

@Component({
  selector: 'app-userfront',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink, FooterComponent, NavbarComponent, HomeComponent],
  templateUrl: './userfront.component.html',
  styleUrl: './userfront.component.css'
})
export class UserfrontComponent {

}
