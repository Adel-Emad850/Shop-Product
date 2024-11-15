import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent],
  // templateUrl: './cards.component.html',
  // styleUrl: './cards.component.css'
  template: `
    <div class="cards">
      <app-card></app-card>
      <app-card></app-card>
      <app-card></app-card>
      <app-card></app-card>
      <app-card></app-card>
      <app-card></app-card>
      <app-card></app-card>
      <app-card></app-card>
    </div>
  `
})
export class CardsComponent {
    
}
