import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-save',
  templateUrl: './product-save.component.html',
  styleUrls: ['./product-save.component.scss'],
})
export class ProductSaveComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductSaveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
