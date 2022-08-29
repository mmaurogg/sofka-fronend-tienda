import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
              private productService: ProductService,
              private router: Router ) { }

  ngOnInit(): void {

    const {id} = this.activateRoute.snapshot.params

    this.productService.getProductById(id).subscribe(product => this.product = product);

  }

  goBack(){
    this.router.navigate(['/home'])
  }

  

}
