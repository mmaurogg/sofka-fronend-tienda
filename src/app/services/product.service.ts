import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/products';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  constructor(private http: HttpClient) {}

  URL = "http://localhost:3000/products";

  getProducts(): Observable<Product[]> {
    return this.http.get(this.URL).pipe(map( (resp:any) => resp))
  }

  getProductById(idProduct:string): Observable<Product>{
    return this.http.get(this.URL).pipe(map( (resp:any) => {
      const products:Product[] = resp;

      const productFilter = products.filter(product => product.id == idProduct );

      return productFilter[0];
    
    }))
  }

  searchProducts( text: string ): Observable<Product[]> {

    return this.http.get(this.URL).pipe(map((resp:any) => {
      
      const products:Product[] = resp;
      let productFilter:Product[] = [];
      
      text = text.toLowerCase();

      products.forEach((prod: Product) => {

        const nametoLower = prod.name.toLowerCase();
        const categorytoLower = prod.category.toLowerCase();

        if(nametoLower.indexOf(text) >= 0 || categorytoLower.indexOf(text) >= 0 ){
          productFilter.push(prod); 
        }
      });

      return productFilter;
    })) 
  }


}
