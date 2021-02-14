// Script.js

window.addEventListener('DOMContentLoaded', () => {
  
  let cart = document.getElementById("cart-icon");
  cart.src = "./assets/cart-icon.png";
  
  let shop = document.getElementById("shop-icon");
  shop.src = "./assets/shop-icon.png";
  
  if (localStorage.getItem("count") != null){
    let count = document.getElementById("cart-count");
    count.textContent = localStorage.getItem("count");
  }
  
  fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
    localStorage.setItem("data", data);
    let product_list = document.getElementById("product-list");
    for (let i=0; i < data.length; i++){
      let product = document.createElement("product-item");
      product.setAttribute('data', JSON.stringify(data[i]));
      product_list.appendChild(product);
    }
  })
});
