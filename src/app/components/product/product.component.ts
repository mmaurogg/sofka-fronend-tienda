import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product!: Product;
  constructor( private activateRoute: ActivatedRoute,
              private productService: ProductService ) { }

  ngOnInit(): void {

    const {id} = this.activateRoute.snapshot.params

    //TODO:getProductById
    this.productService.getProductById(id).subscribe(product => this.product = product);

  }

  

}
