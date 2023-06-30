import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductSaveComponent } from '../product-save/product-save.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'price', 'category', 'actions'];
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
