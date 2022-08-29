import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:Product[]=[];
  images: string[]=[]

  constructor( private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  
  }


  loadProducts(){
    this.productService.getProducts().subscribe( resp => {
      this.products = resp; 
      this.imagesSlides();
    })
  }

  imagesSlides(){
    this.products.forEach( prod => this.images.push(prod.image[0]))
  }


}
