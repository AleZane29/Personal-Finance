import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DATE_LOCALE,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import categories from '../../../assets/categories.json';
import transactions from '../../../assets/transactions.json';
import { Categories, SubCategories } from '../../../interfaces/categories';
import { Transactions } from '../../../interfaces/transactions';
@Component({
  selector: 'app-fxf-dialog-add-transactions',
  standalone: true,
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule,
  ],
  templateUrl: './fxf-dialog-add-transactions.component.html',
  styleUrl: './fxf-dialog-add-transactions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FxfDialogAddTransactionsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { type: string }) {}
  readonly dialogRef = inject(MatDialogRef<FxfDialogAddTransactionsComponent>);
  defaultCurrency = '€';
  catIncome: Categories[] = categories.incomeCategories;
  catExpense: Categories[] = categories.expenseCategories;

  transactionForm = new FormGroup({
    date: new FormControl(),
    amount: new FormControl(),
    currency: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    subCategory: new FormControl(),
  });

  filterSubCategories(): SubCategories[] {
    let res: SubCategories[] = [];
    if (this.data.type == 'Inc') {
      this.catIncome.forEach((x) => {
        if (x.name == this.transactionForm.value.category) {
          x.subCategories.forEach((i) => res.push(i));
        }
      })!;
    } else if (this.data.type == 'Exp') {
      this.catExpense.forEach((x) => {
        if (x.name == this.transactionForm.value.category) {
          x.subCategories.forEach((i) => res.push(i));
        }
      })!;
    }
    return res;
  }

  formSubmit() {
    this.transactionForm.value.date =
      this.transactionForm.value.date.toLocaleDateString();
    let transaction: Transactions = JSON.parse(
      JSON.stringify(this.transactionForm.value)
    );
    let maxId: number = 0;
    transactions.income.forEach((x) => {
      if (x.id >= maxId) {
        maxId = x.id + 1;
      }
    });
    transaction.id = maxId;
    // writeJsonFile('../../../assets/transactions.json', { transaction });
    this.dialogRef.close(transaction);
  }
}
