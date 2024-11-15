import { Component } from '@angular/core';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [],
  // templateUrl: './product-info.component.html',
  // styleUrl: './product-info.component.css'
  template:`
  <div id="lightbox-modal" class="lightbox-modal">
    <span class="close-lightbox" (click)="closeLightbox()">&times;</span>
    <img class="lightbox-content" id="lightbox-img">
  </div>

  <div class="product-info-container">
    <div class="product-imgs">
      
      <div class="main-img" (click)="openLightbox(mainImg.src)">
        <span class="discount">-50%</span>
        <img #mainImg src="/imgs/6-product-400x463 (1).jpg" alt="">
      </div>
      <div class="secondary-imgs">
        <div (click)="openLightbox(secondaryImg1.src)">
          <img #secondaryImg1 src="./imgs/7-product-400x463.jpg" alt="" />
        </div>
        <div (click)="openLightbox(secondaryImg2.src)">
          <img #secondaryImg2 src="./imgs/15-product-400x463.jpg" alt="" />
        </div>
      </div>
    </div>
   

    <div class="product-info">

      <div class="p-i-header"><span><a href="#">home</a>/<a href="">Headpones</a>/<p>Product Name</p></span>
      <span><button type="button"><</button><button type="button">></button></span></div>
      
      <div class="p-d">
        <h4>Product type(headphone)</h4>
        <h3>Product Info</h3>
        <span class="price"><p class="prevous-price">$1000</p>$500 <p>& Free Shiping</p></span>
        <p class="f-d">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et velit vel ipsum tincidunt eleifend. Sed placerat, urna ac pulvinar pharetra, sem lectus laoreet tellus, et tincidunt felis risus id dolor. Sed varius, mauris nec efficitur feugiat, felis ex viverra mauris, at convallis lectus nunc nec felis. Quisque vel semper neque, et dictum nisi. Duis et ex vel mi rutrum i</p>
      </div>
      
      <div class="add-to-cart">
        <div class="button" (click)="removeOne()">-</div>
        <div id="numberOfP">1</div>
        <div class="button" (click)="addOne()">+</div>
        <button>Add to Cart</button>
      </div>
      <hr>
      <div class="p-i-footer">
        <span>Category: <a href="#">Headphones</a></span>
        <h2>Free shipping on orders over $50!</h2>
        <ul>
          <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg> <p>Lorem ipsum dolor sit amet,</p></li>
          <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><p>Lorem ipsum dolor sit amet,</p></li>
          <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><p>Lorem ipsum dolor sit amet,</p></li>
        </ul>
      </div>
      <div class="checkout">
        <fieldset>
          <legend>Guranteed Safe Checkout</legend>
          <ul>
            <li><img src="./imgs/visa-logo-800x450.webp" alt=""></li>
            <li><img src="./imgs/MasterCard_Logo.webp" alt=""></li>
            <li><img src="./imgs/paypal-logo-preview.webp" alt=""></li>
          </ul>
        </fieldset>
      </div>

    </div>
  </div>

    
  `
 
})
export class ProductInfoComponent {

  openLightbox(imgSrc: string): void {
    const modal = document.getElementById('lightbox-modal') as HTMLElement;
    const modalImg = document.getElementById('lightbox-img') as HTMLImageElement;
    modal.style.display = 'block';
    modalImg.src = imgSrc;
  }

  closeLightbox(): void {
    const modal = document.getElementById('lightbox-modal') as HTMLElement;
    modal.style.display = 'none';
  }

  removeOne(): void {
    const numberElement = document.getElementById('numberOfP') as HTMLElement; // Make sure to cast to the correct type
    if (numberElement) {
        let number = parseInt(numberElement.innerText); // Get the inner text as a string and parse it to an integer
        if (number > 1) {
            number--; // Decrement the number
            numberElement.innerText = number.toString(); // Update the element's inner text
        }
    }
  }
  addOne(): void {
    const numberElement = document.getElementById('numberOfP') as HTMLElement; // Make sure to cast to the correct type
    if (numberElement) {
        let number = parseInt(numberElement.innerText); // Get the inner text as a string and parse it to an integer
        number++; // Increment the number
        numberElement.innerText = number.toString(); // Update the element's inner text
    }
  }
}




