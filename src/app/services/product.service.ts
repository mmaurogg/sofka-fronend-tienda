import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/products';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  products: any;
  
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('assets/datos.json').pipe(map( (resp:any) => resp.catalogo))
  }

  getProductById(idProduct:string){
    return this.http.get('assets/datos.json').pipe(map( (resp:any) => {
      const products:Product[] = resp.catalogo;

      const productFilter = products.filter(product => product.id == idProduct );

      return productFilter[0]
    
    }))
  }
}
