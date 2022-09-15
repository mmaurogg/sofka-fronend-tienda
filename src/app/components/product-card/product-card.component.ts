import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
    
  }

  

  // imgError(){
  //   //aca tambien puedo configurar la imagen en error
  //   console.log("imagen por defecto");
    
  // }

}
