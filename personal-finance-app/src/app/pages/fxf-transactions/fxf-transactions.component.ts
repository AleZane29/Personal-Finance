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

  // ngOnInit(): void {
  //   this.dataTransactions = JSON.parse(
  //     fs.readFileSync('./assets/transactions.json', 'utf8')
  //   );
  //   console.log(this.dataTransactions);
  // }
}
