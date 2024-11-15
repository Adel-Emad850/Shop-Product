import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-head',
  standalone: true,
  imports: [],
  // templateUrl: './shop-head.component.html',
  // styleUrl: './shop-head.component.css'
  template: `
  <div class="shop-head">
      <h1>SHOP</h1>
      <div class="breadcrumbs">
        <a href="#">Home</a><p>></p><p>Shop</p>
      </div>
    </div>
  `
})
export class ShopHeadComponent {

}
