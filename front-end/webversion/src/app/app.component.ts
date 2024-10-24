import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutsModule } from './layouts/layouts.module';
import { AdminFrontComponent } from './layouts/admin-front/admin-front.component';
import { UserfrontComponent } from './layouts/userfront/userfront.component';
import { SigninComponentComponent } from './layouts/signin-component/signin-component.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AdminFrontComponent,
    UserfrontComponent,SigninComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webversion';
}
