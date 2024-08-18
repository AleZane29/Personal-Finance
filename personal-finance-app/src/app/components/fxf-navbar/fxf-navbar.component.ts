import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'fxf-navbar',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatSlideToggleModule],
  templateUrl: './fxf-navbar.component.html',
  styleUrl: './fxf-navbar.component.scss',
})
export class FxfNavbarComponent {
  theme = 'dark';

  toggleTheme() {
    this.theme = this.theme == 'dark' ? 'light' : 'dark';
    document
      .getElementById('data-theme')
      ?.setAttribute('data-theme', this.theme);
  }
}
