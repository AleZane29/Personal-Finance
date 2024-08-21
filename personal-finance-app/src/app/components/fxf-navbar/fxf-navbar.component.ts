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
  title = 'FleXFin';
  theme = 'dark';

  // ngOnInit() {
  //   document
  //     .getElementById('data-theme')
  //     ?.setAttribute('data-theme', localStorage.getItem('Theme')!);
  // }

  changeTheme() {
    if (localStorage.getItem('Theme') == 'dark') {
      localStorage.setItem('Theme', 'light');
    } else {
      localStorage.setItem('Theme', 'dark');
    }
    console.log(localStorage.getItem('Theme'));
    document
      .getElementById('data-theme')
      ?.setAttribute('data-theme', localStorage.getItem('Theme')!);
  }
}
