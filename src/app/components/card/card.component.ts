import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  // templateUrl: './card.component.html',
  // styleUrl: './card.component.css'
  template:`
  <div class="card-container">
      <span class="discount">-50%</span>
      <div class="card-img">
        <img src="/imgs/6-product-400x463 (1).jpg" alt="">
      </div>
      <div class="card-info">
        <h3>Product Name</h3>
        <p>Product Description</p>
        <span class="rating">★★★★☆</span>
        <p class="previous-price">1000$</p><p class="new-price">500$</p>  
        <button>Add to Cart</button>
      </div>
    </div>
    `
})
export class CardComponent {

}
