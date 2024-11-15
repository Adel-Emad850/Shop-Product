import { Component } from '@angular/core';
import { ShopBodyComponent } from "../shop-body/shop-body.component";
import { ShopHeadComponent } from "../shop-head/shop-head.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ShopBodyComponent, ShopHeadComponent],
  // templateUrl: './shop.component.html',
  // styleUrl: './shop.component.css'
  template:`
    <app-shop-head/>
    <app-shop-body/>
    `
})
export class ShopComponent {

}
