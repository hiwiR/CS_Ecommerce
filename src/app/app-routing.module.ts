import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCartComponent } from './features/cart/view-cart/view-cart.component';
import { AppComponent } from './app.component';
import { ProductListingComponent } from './features/product/components/product-listing/product-listing.component';

const routes: Routes = [
  {path: 'cart' , loadChildren: ()=> import('./features/cart/cart.module').then(m=> m.CartModule)},
  //{path: 'cart/view', component: ViewCartComponent},
   {path: '' , component: ProductListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
