// Script.js

let my_data;

window.addEventListener('DOMContentLoaded', () => {
  fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => my_data = data);
});
