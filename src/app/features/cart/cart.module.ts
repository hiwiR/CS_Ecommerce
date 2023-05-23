import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { FeaturesRoutingModule } from '../features-routing.modules';
@NgModule({
  declarations: [
    ViewCartComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  exports: [
    ViewCartComponent
  ]
})
export class CartModule { }
