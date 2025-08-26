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
import categories from '../../../../../data/categories.json';
import transactions from '../../../../../data/transactions.json';
import { Category, SubCategory } from '../../../interfaces/categories';
import { Transaction } from '../../../interfaces/transactions';
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
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      type: string;
      transaction: Transaction | undefined;
      action: string;
    }
  ) {}
  readonly dialogRef = inject(MatDialogRef<FxfDialogAddTransactionsComponent>);
  defaultCurrency = '€';
  catIncome: Category[] = categories.incomeCategories;
  catExpense: Category[] = categories.expenseCategories;

  transactionForm = new FormGroup({
    date: new FormControl(
      new Date(
        this.data.transaction?.date != undefined
          ? this.data.transaction?.date!
          : ''
      )
    ),
    amount: new FormControl(this.data.transaction?.amount),
    currency: new FormControl(this.data.transaction?.currency),
    description: new FormControl(this.data.transaction?.description),
    category: new FormControl(this.data.transaction?.category),
    subCategory: new FormControl(this.data.transaction?.subCategory),
  });

  filterSubCategories(): SubCategory[] {
    let res: SubCategory[] = [];
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
    let transaction: Transaction = JSON.parse(
      JSON.stringify(this.transactionForm.value)
    );
    if (this.data.action == 'create') {
      let maxId: number = 0;
      if (this.data.type == 'Inc') {
        transactions.income.forEach((x) => {
          if (x.id >= maxId) {
            maxId = x.id + 1;
          }
        });
      }
      if (this.data.type == 'Exp') {
        transactions.expense.forEach((x) => {
          if (x.id >= maxId) {
            maxId = x.id + 1;
          }
        });
      }
      transaction.id = maxId;
    } else {
      transaction.id = this.data.transaction?.id!;
    }
    transaction.date =
      this.transactionForm.value.date!.toLocaleDateString('en-CA');
    this.dialogRef.close(transaction);
  }
}
