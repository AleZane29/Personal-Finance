import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FxfNavbarComponent } from './fxf-navbar/fxf-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FxfNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'FleXFin';
}
