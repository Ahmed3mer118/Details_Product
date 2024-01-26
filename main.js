let products = null;
fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    // console.log(products);
    addProduct()
  });

let list = document.querySelector(".list");

function addProduct() {
  products.forEach((product) => {
    let newProduct = document.createElement("a");
    newProduct.href = "/details.html?id=" + product.id;
    newProduct.classList.add("item");
    newProduct.innerHTML = `
        <img src="image/${product.image}">
        <h2>${product.name}</h2>
        <span>${product.price} EG</span>
        `;
    list.appendChild(newProduct);
  });
}
