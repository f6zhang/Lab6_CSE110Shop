// product-item.js

class ProductItem extends HTMLElement {
  
  let data;
  
  constructor() {
    super();
  }
  
  connectedCallback() {
    
    localStorage.setItem(data.id, "0");
    
    let shadow = this.attachShadow({mode: 'open'});
    
    let wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'product');
    
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
    wrapper.appendChild(title);
    
    let price = document.createElement('span');
    
    price.setAttribute('class', 'price');
    if (this.hasAttribute('data')){
      title.textContent = "$" + data.price;
    }
    wrapper.appendChild(price);
    
    let button = document.createElement("button");
    button.onclick = function(){
       if (button.textContent == "Add to Cart"){
         button.textContent = "Remove from Cart";
         let count = document.getElementById("cart-count");
         count.textContent = (parseInt(count.textContent) + 1).toString();
         localStorage.setItem(data.id, "1");
       }else{
         button.textContent = "Add to Cart";
         let count = document.getElementById("cart-count");
         count.textContent = (parseInt(count.textContent) - 1).toString();
         localStorage.setItem(data.id, "1");
       }
    }
    button.textContent = "Add to Cart";
    wrapper.appendChild(button);

    const style = document.createElement('style');
    
    style.textContent = `
      .price {
        color: green;
        font-size: 1.8em;
        font-weight: bold;
         margin: 0;
      }

      .product {
        align-items: center;
        background-color: white;
        border-radius: 5px;
        display: grid;
        grid-template-areas: 
        'image'
        'title'
        'price'
        'add';
        grid-template-rows: 67% 11% 11% 11%;
        height: 450px;
        filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
        margin: 0 30px 30px 0;
        padding: 10px 20px;
        width: 200px;
      }

      .product > button {
        background-color: rgb(255, 208, 0);
        border: none;
        border-radius: 5px;
        color: black;
        justify-self: center;
        max-height: 35px;
        padding: 8px 20px;
        transition: 0.1s ease all;
      }

      .product > button:hover {
        background-color: rgb(255, 166, 0);
        cursor: pointer;
        transition: 0.1s ease all;
      }

      .product > img {
        align-self: center;
        justify-self: center;
        width: 100%;
      }

      .title {
        font-size: 1.1em;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .title:hover {
        font-size: 1.1em;
        margin: 0;
        white-space: wrap;
        overflow: auto;
        text-overflow: unset;
      }

    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    
  }
           
}

customElements.define('product-item', ProductItem);
