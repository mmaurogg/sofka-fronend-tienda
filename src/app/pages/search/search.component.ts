import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, DoCheck {

  products:Product[]=[];
  load: boolean = true;
  
  constructor( private activatedRoute: ActivatedRoute,
              private productService: ProductService) {

                this.loadProducts();
               }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.loadProducts();
  }

  loadProducts(){

    const {text} = this.activatedRoute.snapshot.params;
    
    this.productService.searchProducts(text).subscribe( resp => {
      this.products = resp;    
      this.load = false;
    })
  }

}
