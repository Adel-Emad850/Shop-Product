import { Component } from '@angular/core';

@Component({
  selector: 'app-product-discription',
  standalone: true,
  imports: [],
  // templateUrl: './product-discription.component.html',
  // styleUrl: './product-discription.component.css'
  template:`
  <div class="foldable-box">
    <span class="foldable-head" (click)="foldDescription()">Description <span>{{changeapleMarkD}}</span></span>
    <div class="foldable-body folded" id="foldD">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut mollitia tempore modi optio consequatur, delectus eligendi libero alias minima? Delectus natus aut temporibus id quam, consectetur atque corrupti officiis minima!</div>
  </div>

  `
})
export class ProductDiscriptionComponent {
  public changeapleMarkD: string = "+";
  private isFoldedD: boolean = true;

  foldDescription() {
    const foldableBody = document.querySelector('#foldD') as HTMLElement;
    
    foldableBody.classList.toggle('folded');

    // Toggle the marker between "+" and "-" based on the folding state
    this.changeapleMarkD = this.isFoldedD ? "-" : "+";
    
    // Flip the folded state
    this.isFoldedD = !this.isFoldedD;
  }
}
