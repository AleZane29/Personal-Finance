import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Transaction } from '../../interfaces/transactions';
import { TransactionsService } from '../../services/transactions.service';
import { FxfDialogAddTransactionsComponent } from '../fxf-dialogs/fxf-dialog-add-transactions/fxf-dialog-add-transactions.component';
import { FxfDialogConfirmComponent } from '../fxf-dialogs/fxf-dialog-confirm/fxf-dialog-confirm.component';

@Component({
  selector: 'fxf-table',
  standalone: true,
  imports: [MatIconModule, MatDialogModule, DatePipe],
  templateUrl: './fxf-table.component.html',
  styleUrl: './fxf-table.component.scss',
})
export class FxfTableComponent {
  @Input() headers: string[] = [];
  @Input() title: string = '';
  @Input() type: string = '';
  @Input() content: Transaction[] = [];

  readonly dialog = inject(MatDialog);
  transactions: Transaction[] = [];
  constructor(private service: TransactionsService) {}
  openCreateDialog() {
    const dialogRef = this.dialog.open(FxfDialogAddTransactionsComponent, {
      width: '800px',
      data: { type: this.type, action: 'create' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != '' && result != undefined) {
        if (this.type == 'Inc') {
          this.service.CreateIncome(result).subscribe({
            next: (res) => {
              this.content.push(result);
            },
            error: (err) => console.error('Errore durante la creazione:', err),
          });
        } else {
          this.service.CreateExpense(result).subscribe({
            next: (res) => {
              this.content.push(result);
            },
            error: (err) => console.error('Errore durante la creazione:', err),
          });
        }
      }
    });
  }
  openDeleteDialog(itemId: number) {
    const dialogRef = this.dialog.open(FxfDialogConfirmComponent, {
      width: '600px',
      data: {
        title: 'Delete transaction',
        message: 'Do you want to permanently delete the transaction?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'Confirm') {
        if (this.type == 'Inc') {
          this.service.DeleteIncome(itemId).subscribe({
            next: (res) => {},
            error: (err) => console.error('Errore durante la creazione:', err),
          });
        } else {
          this.service.DeleteExpense(itemId).subscribe({
            next: (res) => {},
            error: (err) => console.error('Errore durante la creazione:', err),
          });
        }
      }
    });
  }

  openUpdateDialog(tran: Transaction) {
    const dialogRef = this.dialog.open(FxfDialogAddTransactionsComponent, {
      width: '800px',
      data: { type: this.type, transaction: tran, action: 'update' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != '' && result != undefined) {
        if (this.type == 'Inc') {
          this.service.UpdateIncome(result).subscribe({
            next: (res) => {},
            error: (err) => console.error('Errore durante la creazione:', err),
          });
        } else {
          this.service.UpdateExpense(result).subscribe({
            next: (res) => {},
            error: (err) => console.error('Errore durante la creazione:', err),
          });
        }
      }
    });
  }
}
