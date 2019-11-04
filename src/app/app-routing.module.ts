import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsModule } from './products/products.module';

const routePaths:Routes = [
  { path:'login', component: LoginComponent },
  { path:'home', component: HomeComponent },
  { path:'products', loadChildren:'../app/products/products.module#ProductsModule'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routePaths, {useHash: true}) ,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
