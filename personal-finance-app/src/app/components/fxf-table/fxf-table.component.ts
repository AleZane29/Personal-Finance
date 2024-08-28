import { Component, Input } from '@angular/core';

@Component({
  selector: 'fxf-table',
  standalone: true,
  imports: [],
  templateUrl: './fxf-table.component.html',
  styleUrl: './fxf-table.component.scss',
})
export class FxfTableComponent {
  @Input() headers: string[] = [];
  @Input() title: string = '';
  @Input() content: any[][] = [];
}
