import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './home/add-product/add-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    HomeComponent,
    AddProductComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [LayoutComponent],
})
export class ComponentsModule {}
