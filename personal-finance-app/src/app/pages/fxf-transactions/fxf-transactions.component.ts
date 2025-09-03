import { Component, OnInit } from '@angular/core';
import { FxfTableComponent } from '../../components/fxf-table/fxf-table.component';
import { Transaction } from '../../interfaces/transactions';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-fxf-transactions',
  standalone: true,
  imports: [FxfTableComponent],
  templateUrl: './fxf-transactions.component.html',
  styleUrl: './fxf-transactions.component.scss',
})
export class FxfTransactionsComponent implements OnInit {
  constructor(private service: TransactionsService) {}
  headers: string[] = ['Id', 'Date', 'Amount', 'Description', 'Category', ''];
  dataIncome: Transaction[] = [];
  dataExpense: Transaction[] = [];

  ngOnInit() {
    this.service.GetAllIncome().subscribe({
      next: (data) => {
        this.dataIncome = data;
      },
      error: (err) => console.error('Errore:', err),
    });

    this.service.GetAllExpense().subscribe({
      next: (data) => {
        this.dataExpense = data;
      },
      error: (err) => console.error('Errore:', err),
    });
  }
}
