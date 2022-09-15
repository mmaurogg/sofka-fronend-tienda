import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { SlidesComponent } from './slides/slides.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ImageComponent } from './image/image.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    ProductsGridComponent,
    SlidesComponent,
    ProductDetailComponent,
    ProductCardComponent,
    ImageComponent
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    ProductsGridComponent,
    SlidesComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,  
    RouterModule

  ]
})
export class ComponentsModule { }
