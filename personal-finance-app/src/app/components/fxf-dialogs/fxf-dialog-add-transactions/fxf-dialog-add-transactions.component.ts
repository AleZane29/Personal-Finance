import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-fxf-dialog-add-transactions',
  standalone: true,
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
  ],
  templateUrl: './fxf-dialog-add-transactions.component.html',
  styleUrl: './fxf-dialog-add-transactions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FxfDialogAddTransactionsComponent {
  readonly dialogRef = inject(MatDialogRef<FxfDialogAddTransactionsComponent>);
}
