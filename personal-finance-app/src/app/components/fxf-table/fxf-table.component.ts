import { Component, inject, Input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Transactions } from '../../interfaces/transactions';
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
  @Input() content: Transactions[] = [];

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(FxfDialogAddTransactionsComponent, {
      width: '800px',
      data: { type: this.type },
    });

    dialogRef.afterClosed().subscribe((result) => {
      //AGGIUNGERE DATI IN JSON
      console.log(`Dialog result: ${result}`);
    });
  }
}
