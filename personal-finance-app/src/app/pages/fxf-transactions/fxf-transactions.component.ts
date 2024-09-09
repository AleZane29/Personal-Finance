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
// @Injectable({ providedIn: 'root' })
export class FxfTransactionsComponent {
  // ngOnInit() {
  //   var XMLHttpRequest = require('xhr2');
  //   var xhr = new XMLHttpRequest();
  //   var requestUrl = 'https://api.restful-api.dev/objects/4';
  //   xhr.open('GET', requestUrl, true);
  //   xhr.onload = function () {
  //     console.log(xhr.responseText);
  //   };
  //   xhr.send();
  // }
  headers: string[] = ['Id', 'Date', 'Amount', 'Description', 'Category'];
  dataIncome: Transactions[] = transactions.income;
  dataExpense: Transactions[] = transactions.expense;

  addIcomes() {}
}
