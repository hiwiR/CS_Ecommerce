import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCartComponent } from './cart/view-cart/view-cart.component';
import { ProductDetailComponent } from './product/components/product-detail/product-detail.component';

const routes: Routes = [
    { path: 'products/:id', component: ProductDetailComponent},
    { path: 'view', component: ViewCartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
