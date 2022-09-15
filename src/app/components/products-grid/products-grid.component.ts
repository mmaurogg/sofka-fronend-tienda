import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {

  @Input() products!: Product[];
  @Output() idProduct = new EventEmitter<string>(); 

  constructor( ) { }

  ngOnInit(): void {
    
  }

  goToProduct(idProduct: string){
    this.idProduct.emit(idProduct);
  }



  


}
