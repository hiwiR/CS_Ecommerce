import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProdutCardComponent } from './components/produt-card/produt-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
@NgModule({
  declarations: [
    ProductListingComponent,
    ProdutCardComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ProductListingComponent,
    ProdutCardComponent,
    ProductDetailComponent
  ]
  
})
export class ProductModule { }
