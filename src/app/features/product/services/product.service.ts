import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from 'src/app/core/config';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient: HttpClient) { }
  
  getProducts() : Observable<Product[]> {
      return this.httpclient.get<Product[]>(`${API_BASE_URL}/products`);
  } 

}
