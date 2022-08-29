import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/products';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {

  @Input() products!: Product[];

  hiddenInfo: boolean = true;

  constructor( private router: Router ) { }

  ngOnInit(): void {

    //TODO: listener
    window.addEventListener('mouseover', this.print );

    console.log(this.products);
    
  }


  print(event: MouseEvent){
    let i = event.target;
  }

  goToProduct(idProduct: String){

    console.log("dirigiendo a producto");
    
    if(idProduct != null){
      this.router.navigate(['/product',idProduct])
    }
  }

  


}
