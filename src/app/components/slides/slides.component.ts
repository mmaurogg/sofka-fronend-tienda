import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/products';
import Swiper from 'swiper';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {

  products: Product[] = [];

  constructor( private productService: ProductService
              ) {

               }

  ngOnInit(): void {

    this.loadSlidesProducts()
    
  }

  //ngAfterAfterViewInit(){
  ngAfterContentInit(){

  }

  loadSlidesProducts(){
    this.productService.getProducts().subscribe( resp => {
      this.products = resp;    
      console.log(this.products);
    })
  }
  

}
