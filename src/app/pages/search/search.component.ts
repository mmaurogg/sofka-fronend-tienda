import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit  {

  products:Product[]=[];
  load: boolean = true;
  
  constructor( private activatedRoute: ActivatedRoute,
              private productService: ProductService) {

                
               }

  ngOnInit(): void {
    this.loadProducts();
  }


  loadProducts(){

    this.activatedRoute.params.subscribe( params => {
      this.productService.searchProducts(params['text']).subscribe( resp => {
        this.products = resp;    
        this.load = false;
        console.log(resp);
        
      })
    })

    //const {text} = this.activatedRoute.snapshot.params;
    
    
  }

}
