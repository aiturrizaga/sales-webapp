import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { DataBodyReq, ProductSaveComponent } from '../product-save/product-save.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'price', 'category', 'actions', 'active'];
  dataSource = [];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.findAll().subscribe((res: any) => {
      console.log('Respuesta:', res);
      this.dataSource = res.data;
    });
  }

  deleteProduct(id: any, product: any) {
    const body: DataBodyReq = new DataBodyReq();
    product.active = false;
    body.data = product;
    console.log(product);
    this.productService.update(id, body).subscribe(res => {
      console.log('Product', res);
      this.getProducts();
    });
  }

  openDlgProduct(id?: any, product?: any) {
    const dialogRef = this.dialog.open(ProductSaveComponent, {
      data: {
        id,
        product
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.getProducts();
    });
  }
}
