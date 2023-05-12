import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
    
  constructor(private productService: ProductService){

  }
  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe((res) => console.log(res))
    
  }
}
