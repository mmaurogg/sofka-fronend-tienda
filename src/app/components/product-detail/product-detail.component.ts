import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product!: Product;
  
  constructor( private router: Router ) { }

  ngOnInit(): void {

  }

  goBack(){
    this.router.navigate(['/home'])
  }
  
}
