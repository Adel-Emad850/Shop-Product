import { Component } from '@angular/core';
import { ProductInfoComponent } from "../product-info/product-info.component";
import { ProductDiscriptionComponent } from "../product-discription/product-discription.component";
import { ProductReviewsComponent } from "../product-reviews/product-reviews.component";
import { RelatedProductsComponent } from "../related-products/related-products.component";
import { RecentlyViewedComponent } from "../recently-viewed/recently-viewed.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductInfoComponent, ProductDiscriptionComponent, ProductReviewsComponent, RelatedProductsComponent, RecentlyViewedComponent],
  // templateUrl: './product.component.html',
  // styleUrl: './product.component.css'
  template:`
  <app-product-info/>
  <app-product-discription/>
  <app-product-reviews/>
  <app-related-products/>
  <app-recently-viewed/>
  `
})
export class ProductComponent {

}
