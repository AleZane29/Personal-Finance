import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';
import { LocalStore } from '../../services/localStore.service';

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
  constructor(private localStore: LocalStore) {}
  ngOnInit() {
    try {
      if (!this.localStore.getData('Theme')) {
        this.localStore.saveData('Theme', 'dark');
      }
      this.theme = this.localStore.getData('Theme');
    } catch (error) {}
  }

  changeTheme() {
    if (this.localStore.getData('Theme') == 'dark') {
      this.localStore.saveData('Theme', 'light');
    } else {
      this.localStore.saveData('Theme', 'dark');
    }
    this.theme = this.localStore.getData('Theme');
    document
      .getElementById('data-theme')
      ?.setAttribute('data-theme', this.localStore.getData('Theme'));
  }
}
