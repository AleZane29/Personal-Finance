import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-fxf-dialog-confirm',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  templateUrl: './fxf-dialog-confirm.component.html',
  styleUrl: './fxf-dialog-confirm.component.scss',
})
export class FxfDialogConfirmComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      message: string;
    }
  ) {}
  readonly dialogRef = inject(MatDialogRef<FxfDialogConfirmComponent>);

  confirmClick() {
    this.dialogRef.close('Confirm');
  }
}
