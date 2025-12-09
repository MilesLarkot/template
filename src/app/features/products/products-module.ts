import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing-module';
import { Products } from './products';
import { ProductList } from './pages/product-list/product-list';
import { Card } from '../../components/card/card';
import { ProductDetails } from './pages/product-details/product-details';

@NgModule({
  declarations: [Products, ProductList, ProductDetails],
  imports: [CommonModule, ProductsRoutingModule, Card],
})
export class ProductsModule {}
