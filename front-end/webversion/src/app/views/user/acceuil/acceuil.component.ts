import { Component } from '@angular/core';
import { FooterClientComponent } from "../footer-client/footer-client.component";

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [FooterClientComponent],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {

}
