import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Products } from './products';
import { ProductList } from './pages/product-list/product-list';
import { ProductDetails } from './pages/product-details/product-details';
import { AddProduct } from './pages/add-product/add-product';

const routes: Routes = [
  {
    path: '',
    component: Products,
    children: [
      { path: '', component: ProductList },
      { path: 'add', component: AddProduct },
      { path: 'details/:id', component: ProductDetails },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
