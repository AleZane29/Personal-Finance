import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FxfNavbarComponent } from '../../components/fxf-navbar/fxf-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FxfNavbarComponent],
  templateUrl: './fxf-login.component.html',
  styleUrl: './fxf-login.component.scss',
})
export class AppComponent {
  title = 'FleXFin';
}
