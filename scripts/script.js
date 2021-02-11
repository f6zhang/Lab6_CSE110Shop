// Script.js

window.addEventListener('DOMContentLoaded', () => {
  fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
    localStorage.setItem("data", data);
    let product_list = document.getelementbyid("product-list");
    for (let i=0; i < data.length; i++){
      let product = document.createElement("product-item", {data = data[i]});
      product_list.appendChild(product);
    }
  })
});
