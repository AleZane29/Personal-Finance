import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Transactions } from '../../interfaces/transactions';

@Component({
  selector: 'fxf-table',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './fxf-table.component.html',
  styleUrl: './fxf-table.component.scss',
})
export class FxfTableComponent {
  @Input() headers: string[] = [];
  @Input() title: string = '';
  @Input() content: Transactions[] = [];
}
