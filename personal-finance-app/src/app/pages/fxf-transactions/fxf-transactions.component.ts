import { Component } from '@angular/core';
// import { ConfigService } from '../../app.config';
import transactions from '../../assets/transactions.json';
import { FxfTableComponent } from '../../components/fxf-table/fxf-table.component';
import { Transactions } from '../../interfaces/transactions';

@Component({
  selector: 'app-fxf-transactions',
  standalone: true,
  imports: [FxfTableComponent],
  templateUrl: './fxf-transactions.component.html',
  styleUrl: './fxf-transactions.component.scss',
})
export class FxfTransactionsComponent {
  headers: string[] = ['Id', 'Date', 'Amount', 'Description', 'Category'];
  dataIncome: Transactions[] = transactions.income;
  dataExpense: Transactions[] = transactions.expense;
}
