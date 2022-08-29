import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product!:Product;

  constructor( private productService: ProductService,
              private activateRoute: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(){
    const {id} = this.activateRoute.snapshot.params

    this.productService.getProductById(id).subscribe(product => this.product = product);
  }

}
