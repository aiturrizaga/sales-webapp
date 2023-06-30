import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';

export class DataBodyReq {
  data: any;
}

@Component({
  selector: 'app-product-save',
  templateUrl: './product-save.component.html',
  styleUrls: ['./product-save.component.scss'],
})
export class ProductSaveComponent implements OnInit {
  productForm: FormGroup = new FormGroup<any>('');

  constructor(
    public dialogRef: MatDialogRef<ProductSaveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  saveProduct() {
    console.log('New product', this.data);
    const body: DataBodyReq = new DataBodyReq();
    body.data = this.productForm.value;

    if (this.data.product) {
      this.productService.update(this.data.id, body).subscribe(res => this.dialogRef.close());
    } else {
      this.productService.save(body).subscribe(res => this.dialogRef.close());
    }
    
  }

  initForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
      salePrice: [0, [Validators.required]],
      category: ['', [Validators.required]],
      active: [true],
    });

    if (this.data) {
      this.productForm.patchValue(this.data.product);
    }

  }
}
