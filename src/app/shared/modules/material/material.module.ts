import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule }from '@angular/material/button';
//import { MatSidenavModule }from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule }from '@angular/material/sidenav';
import { ProductModule } from 'src/app/features/product/product.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
   
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
  ]
})
export class MaterialModule { }
