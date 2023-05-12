import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './shared/components/appbar/appbar.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { ProductModule } from './features/product/product.module';
import { SharedModule } from './shared/modules/shared.module';
//import { ProdutCardComponent } from './features/product/produt-card/produt-card.component';
//mport { ProductListingComponent } from './features/product/product-listing/product-listing.component';
import { TestComponent } from './test/test.component';
// import { AppComponent } from './sharedcomponent/appbar.component';
 //import { ProductListingComponent } from './features/product/product-listing.component';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AppbarComponent } from './components/fixedcomponents/appbar/appbar.component';
// import { LeftsidenavComponent } from './components/fixedcomponents/leftsidenav/leftsidenav.component';
// import { SidenavComponent } from './components/fixedcomponents/sidenav/sidenav.component';
// import { ProdutCardComponent } from './components/product/produt-card/produt-card.component';
// import { ViewCartComponent } from './cart/view-cart/view-cart.component'; 
// import { MaterialModule } from './sharedcomponent/material';
@NgModule({
  declarations: [
     AppComponent,
    // ProductListingComponent,
    // LeftsidenavComponent,
    // SidenavComponent,
    // ProdutCardComponent,
    // ViewCartComponent,
    //AppbarComponent,
    //ProductListingComponent,
    //ProdutCardComponent,
    TestComponent
  ],
  imports: [
       BrowserModule,
    // AppRoutingModule,
       BrowserAnimationsModule,
       MaterialModule,
       ProductModule,
       SharedModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
