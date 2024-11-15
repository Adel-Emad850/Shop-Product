import { Component } from '@angular/core';

@Component({
  selector: 'app-product-reviews',
  standalone: true,
  imports: [],
  // templateUrl: './product-reviews.component.html',
  // styleUrl: './product-reviews.component.css'
  template:`
  <div class="foldable-box">
    <span class="foldable-head" (click)="foldReveiw()">Reveiws <span>{{changeapleMarkR}}</span></span>
    <div class="foldable-body folded" id="foldR">
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut mollitia tempore modi optio consequatur, delectus eligendi libero alias minima? Delectus natus aut temporibus id quam, consectetur atque corrupti officiis minima!</span>
      <h4>Be the first to rate!</h4>
      <form action="" class="rating-form">
        <label for="rating">Rating:</label>
        <select id="rating" name="rating">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label for="review">Review:</label>
        <textarea id="review" name="review" rows="5" cols="30"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
  
  `
})
export class ProductReviewsComponent {
  public changeapleMarkR: string = "+";
  private isFoldedR: boolean = true;

  foldReveiw() {
    const foldableBody = document.querySelector('#foldR') as HTMLElement;
    
    foldableBody.classList.toggle('folded');

    // Toggle the marker between "+" and "-" based on the folding state
    this.changeapleMarkR = this.isFoldedR ? "-" : "+";
    
    // Flip the folded state
    this.isFoldedR = !this.isFoldedR;
  }
}
