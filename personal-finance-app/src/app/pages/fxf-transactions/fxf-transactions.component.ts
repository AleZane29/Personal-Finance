import { Component } from '@angular/core';
import { FxfTableComponent } from '../../components/fxf-table/fxf-table.component';

@Component({
  selector: 'app-fxf-transactions',
  standalone: true,
  imports: [FxfTableComponent],
  templateUrl: './fxf-transactions.component.html',
  styleUrl: './fxf-transactions.component.scss',
})
export class FxfTransactionsComponent {
  headers: string[] = ['Id', 'Date', 'Amount', 'Description', 'Category'];
  //CONTENT DA RECUPERARE TRAMITE JSON
  contentIncome: any[][] = [
    [0, '10/08/2024', 324 + '€', 'Busta Paga', 'Salary - Sia Informatica'],
    [1, '15/08/2024', 224 + '€', 'Busta Paga', 'Salary - Sia Informatica'],
    [1, '15/08/2024', 224 + '€', 'Busta Paga', 'Salary - Sia Informatica'],
  ];
  contentExpense: any[][] = [
    [0, '10/08/2024', 324 + '€', 'Busta Paga', 'Salary - Sia Informatica'],
    [1, '15/08/2024', 224 + '€', 'Busta Paga', 'Salary - Sia Informatica'],
    [1, '15/08/2024', 224 + '€', 'Busta Paga', 'Salary - Sia Informatica'],
  ];
}
