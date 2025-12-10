import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing-module';
import { Products } from './products';
import { ProductList } from './pages/product-list/product-list';
import { Card } from '../../components/card/card';
import { ProductDetails } from './pages/product-details/product-details';
import { Button } from '../../components/button/button';
import { AddProduct } from './pages/add-product/add-product';

@NgModule({
  declarations: [Products, ProductList, ProductDetails, AddProduct],
  imports: [CommonModule, ProductsRoutingModule, Card, Button],
})
export class ProductsModule {}
