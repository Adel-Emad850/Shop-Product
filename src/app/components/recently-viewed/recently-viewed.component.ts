import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-recently-viewed',
  standalone: true,
  imports: [CardComponent],
  // templateUrl: './recently-viewed.component.html',
  // styleUrl: './recently-viewed.component.css'
  template: `
    <div class="mini-cards-container">
      <h2>Recently Viewed:</h2>
      <div class="mini-cards-body">
        <app-card></app-card>
        <app-card></app-card>
        <app-card></app-card>
        <app-card/>

      </div>
     
    </div>
  `
 
})
export class RecentlyViewedComponent {

}
