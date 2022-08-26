import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path: 'home', component: ProductsGridComponent},
  {path: 'product', component: ProductComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
