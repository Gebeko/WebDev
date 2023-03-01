import { Component } from '@angular/core';
import { Product, products } from '../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
  product: Product | undefined;
  share() {
    window.alert('The product has been shared!');
  }
  goLink(){
    window.open(this.product?.url);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
