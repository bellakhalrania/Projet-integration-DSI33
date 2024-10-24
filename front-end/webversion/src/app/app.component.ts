import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutsModule } from './layouts/layouts.module';
import { AdminFrontComponent } from './layouts/admin-front/admin-front.component';
import { UserfrontComponent } from './layouts/userfront/userfront.component';
import { TodolisteComponent } from './layouts/views/user/todoliste/todoliste.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LayoutsModule,AdminFrontComponent,
    UserfrontComponent,TodolisteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webversion';
}
