import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-related-products',
  standalone: true,
  imports: [CardComponent],
  // templateUrl: './related-products.component.html',
  // styleUrl: './related-products.component.css'
  template: `
    <div class="mini-cards-container">
      <h2>Related Products</h2>
      <div class="mini-cards-body">
        <app-card></app-card>
        <app-card></app-card>
        <app-card></app-card>
        <app-card/>
      </div>
     
    </div>
  `
})
export class RelatedProductsComponent {

}
