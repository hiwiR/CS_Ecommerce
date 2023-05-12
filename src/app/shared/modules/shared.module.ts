import { NgModule } from "@angular/core";

import { CommonModule } from '@angular/common';
import { AppbarComponent } from "../components/appbar/appbar.component";
import { LeftsidenavComponent } from "../components/leftsidenav/leftsidenav.component";
import { SidenavComponent } from "../components/sidenav/sidenav.component";
import { MaterialModule } from "./material/material.module";
import { ProductModule } from "src/app/features/product/product.module";
@NgModule({
    declarations: [
        AppbarComponent,
        LeftsidenavComponent,
        SidenavComponent
    ],
    imports: [ 
        CommonModule,
        MaterialModule,
        ProductModule
    ],
    exports: [
        AppbarComponent,
        LeftsidenavComponent,
        SidenavComponent,
        
    ]
})
export class SharedModule{}