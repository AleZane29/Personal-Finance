import { Component, inject, Input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Transaction } from '../../interfaces/transactions';
import { TransactionsService } from '../../services/transactions.service';
import { FxfDialogAddTransactionsComponent } from '../fxf-dialogs/fxf-dialog-add-transactions/fxf-dialog-add-transactions.component';

@Component({
  selector: 'fxf-table',
  standalone: true,
  imports: [MatIconModule, MatDialogModule],
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
  openEditDialog() {
    const dialogRef = this.dialog.open(FxfDialogAddTransactionsComponent, {
      width: '800px',
      data: { type: this.type },
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
    // const dialogRef = this.dialog.open(FxfDialogAddTransactionsComponent, {
    //   width: '800px',
    //   data: { type: this.type },
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result != '' && result != undefined) {
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
    //   }
    // });
  }
}
