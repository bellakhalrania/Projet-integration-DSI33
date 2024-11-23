import { Component, OnInit } from '@angular/core';
import { FooterClientComponent } from "../../views/user/footer-client/footer-client.component";
import { NavbarClientComponent } from "../../views/user/navbar-client/navbar-client.component";
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink, FooterClientComponent, NavbarClientComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  user: any;
  constructor(private route: ActivatedRoute) {}  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        if (params['user']) {
            this.user = JSON.parse(decodeURIComponent(params['user']));
        }
    });
}
}
