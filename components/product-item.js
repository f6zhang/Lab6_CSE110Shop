// product-item.js

class ProductItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    
    let wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');
    
    let img = document.createElement('img');
    img.width = 200;
    
    if (this.hasAttribute('data')){
      img.src = data.image;
      img.alt = data.title;
    }
    
    wrapper.appendChild(img);
    
    let title = document.createElement('span');
    
    title.setAttribute('class', 'title');
    if (this.hasAttribute('data')){
      title.textContent = data.title;
    }
    
    
  }
                <!-- li class="product">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
                    <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
                    <p class="price">$109.95</p>
                    <button onclick="alert('Added to Cart!')">Add to Cart</button>
                </li -->
}

customElements.define('product-item', ProductItem);
