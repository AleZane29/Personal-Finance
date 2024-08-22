import { Component } from '@angular/core';
import { FxfTableComponent } from '../../components/fxf-table/fxf-table.component';

@Component({
  selector: 'app-fxf-transactions',
  standalone: true,
  imports: [FxfTableComponent],
  templateUrl: './fxf-transactions.component.html',
  styleUrl: './fxf-transactions.component.scss',
})
export class FxfTransactionsComponent {}
