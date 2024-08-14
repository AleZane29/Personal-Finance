import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'fxf-navbar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './fxf-navbar.component.html',
  styleUrl: './fxf-navbar.component.scss',
})
export class FxfNavbarComponent {
  menuVisible: boolean = false;
  OpenMenu() {
    this.menuVisible = this.menuVisible ? false : true;
  }
}
