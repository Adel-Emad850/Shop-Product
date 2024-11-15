import { Component } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";
import { FilterComponent } from "../filter/filter.component";

@Component({
  selector: 'app-shop-body',
  standalone: true,
  imports: [CardsComponent, FilterComponent],
  // templateUrl: './shop-body.component.html',
  // styleUrl: './shop-body.component.css'
  template: `
    
    <div class="shop-body">
    <div class="data-filter">
      
      <div class="show-filters" (click)="toggleFilter()"><i class="fas fa-filter"></i> Filters</div>
      <div class="sorter">
        <label for="sort-by">Sort by :</label>
        <select id="sort-by" name="sort-by">
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="price">Latest</option>
          <option value="price">Rating</option>
          <option value="price">Popularity</option>
        </select>
        </div>
    </div>
    <span class="data-info">showing <p>1-8</p> of <p>8</p> results</span>

    <app-filter/>
    <app-cards></app-cards>
    
    <div class="paginations">
      <span class="page-numbers prev-arrows">←</span>
      <span class="page-numbers pagination-actives">1</span>
      <span class="page-numbers">2</span>
      <span class="page-numbers next-arrows">→</span>
    </div>
    

    </div>
  `
})
export class ShopBodyComponent {

  public toggleFilter(): void {
    console.log('toggleFilter');
    let filter = <HTMLElement> document.querySelector('div.filter');
    filter.classList.toggle('filter-close')
  }

}
