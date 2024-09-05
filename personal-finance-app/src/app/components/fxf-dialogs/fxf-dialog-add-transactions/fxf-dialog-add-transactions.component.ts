import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { Categories } from '../../../interfaces/categories';

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
  categoryValue = null;
}
