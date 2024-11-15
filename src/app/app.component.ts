import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from "./components/cards/cards.component";
import { ShopBodyComponent } from "./components/shop-body/shop-body.component";
import { FilterComponent } from "./components/filter/filter.component";
import { ShopComponent } from "./components/shop/shop.component";
import { ProductInfoComponent } from "./components/product-info/product-info.component";
import { ProductComponent } from "./components/product/product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsComponent, ShopBodyComponent, FilterComponent, ShopComponent, ProductInfoComponent, ProductComponent],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  template:`
  <!-- <app-shop/> -->
  <app-product/>
  `
})
export class AppComponent {
  title = 'e-commerce';
}
