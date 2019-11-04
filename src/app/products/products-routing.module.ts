import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';

const route: Routes = [
  {path:'', component:ProductsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ],
  exports:[RouterModule]
})
export class ProductsRoutingModule { }
