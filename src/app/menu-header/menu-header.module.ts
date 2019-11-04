import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './menu-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MenuHeaderComponent]
})
export class MenuHeaderModule { }
