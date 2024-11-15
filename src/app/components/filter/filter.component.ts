import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  // templateUrl: './filter.component.html',
  // styleUrl: './filter.component.css'
  template: `
    
    <div class="filter filter-close" id="filter">
      <form action="">
        <h2>Filter</h2>
        <span class="close-filter" (click)="toggleFilter()">X</span>
        <div class="range-slider">
          <label for="min-price">Price Range:</label>
          <input type="range" id="min-price" min="0" max="100" value="20">
          <input type="range" id="max-price" min="0" max="100" value="80">
          <div class="range-values">
              <span id="min-price-value">20</span> - <span id="max-price-value">80</span>
          </div>
        </div>
        <div class="category">
          <label for="category">Product Type:</label>
          <select name="category">
            <option value="">Category</option>
            <option value="1">Electronics</option>
            <option value="2">Mouse</option>
            <option value="3">Headphones</option>
            <option value="4">Keyboard</option>
            <option value="5">Laptop</option>
            <option value="6">Tablet</option>
            <option value="7">Phone</option>
            <option value="8">Accessories</option>
          </select>
        </div>

        <div class="star-rating filter-section">
          <span class="filter-section-head" id="ratingHead" (click)="wrapRatingSection()">
            <h3>Audiance Rating:</h3>
            <svg class="arrow" id="ratingArrow" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
              <path d="M12 16l-4-4h8l-4 4z" fill="black" /> <!-- Change color as needed -->
            </svg>
          </span>
          <div class="section-body" id="ratingBody">
            <span><input type="checkbox" name="rating" id="rating1" value="1" /><label for="rating1">★</label></span>
            <span><input type="checkbox" name="rating" id="rating2" value="2" /><label for="rating2">★★</label></span>
            <span><input type="checkbox" name="rating" id="rating3" value="3" /><label for="rating3">★★★</label></span>
            <span><input type="checkbox" name="rating" id="rating4" value="4" /><label for="rating4">★★★★</label></span>
            <span><input type="checkbox" name="rating" id="rating5" value="5" /><label for="rating5">★★★★★</label></span>
          </div>  
        </div>

        <div class="brand filter-section">
          <span class="filter-section-head" id="brandHead" (click)="wrapBrandSection()">
            <h3>Brand:</h3> 
            <svg class="arrow" id="brandArrow" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
              <path d="M12 16l-4-4h8l-4 4z" fill="black" /> <!-- Change color as needed -->
            </svg>
          </span>
          <div class="section-body" id="brandBody">
            <span><input type="checkbox" name="brand" id="brand1" value="1" /><label for="brand1">Apple</label></span>
            <span><input type="checkbox" name="brand" id="brand2" value="2" /><label for="brand2">Samsung</label></span>
            <span><input type="checkbox" name="brand" id="brand3" value="3" /><label for="brand3">Xiaomi</label></span>
            <span><input type="checkbox" name="brand" id="brand4" value="4" /><label for="brand4">HP</label></span>
            <span><input type="checkbox" name="brand" id="brand5" value="5" /><label for="brand5">Lenovo</label></span>
            <span><input type="checkbox" name="brand" id="brand6" value="6" /><label for="brand6">Asus</label></span>
            <span><input type="checkbox" name="brand" id="brand7" value="7" /><label for="brand7">Dell</label></span>
            <span><input type="checkbox" name="brand" id="brand8" value="8" /><label for="brand8">Acer</label></span>
            <span><input type="checkbox" name="brand" id="brand9" value="9" /><label for="brand9">Google</label></span>
            <span><input type="checkbox" name="brand" id="brand10" value="10" /><label for="brand10">Huawei</label></span>
            <span><input type="checkbox" name="brand" id="brand11" value="11" /><label for="brand11">OnePlus</label></span>
          </div>
        </div>
        
        
        <button type="submit">Search</button>
        <button type="reset">Clear</button>
      </form>
    </div>
  `,
})
export class FilterComponent {
   

  // Class method to toggle filter
  public toggleFilter(): void {
    
    let filter = <HTMLElement> document.querySelector('div.filter');
    filter.classList.toggle('filter-close')
  }
  
  public wrapBrandSection() : void {

    let wrapsection = <HTMLElement> document.getElementById('brandBody');
    let arrow = <HTMLElement> document.getElementById('brandArrow');
    wrapsection.classList.toggle('section-toggle-wrap');
    arrow.classList.toggle('rotate-arrow');
  }

  public wrapRatingSection() : void {

    let wrapsection = <HTMLElement> document.getElementById('ratingBody');
    let arrow = <HTMLElement> document.getElementById('ratingArrow');
    wrapsection.classList.toggle('section-toggle-wrap');
    arrow.classList.toggle('rotate-arrow');
  }



 
  

}
