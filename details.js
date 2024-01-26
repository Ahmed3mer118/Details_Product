let products = null;
fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    showDetails();
  });

  function showDetails(){
    let productId = new URLSearchParams(window.location.search).get("id");
    let thisProduct = products.filter((value)=>{
        return value.id == productId;
    })[0];

    if(!thisProduct){
        window.location.href ="/"
    }
    document.querySelector(".image img").src += thisProduct.image;
    document.querySelector(".name").innerHTML = thisProduct.name;
    document.querySelector(".price").innerHTML = thisProduct.price + "EG";
    document.querySelector(".description").innerHTML = thisProduct.description;

    let list = document.querySelector(".list")
    products.filter(value=> value.id != productId ).forEach(
        product =>{
            let newProduct = document.createElement("a")
            newProduct.href = "/details.html?id=" + product.id;
            newProduct.classList.add("item")
            newProduct.innerHTML = `
            <img src="image/${product.image}">
            <h2>${product.name}</h2>
            <span>${product.price} EG</span>
            `;
            list.appendChild(newProduct)
        }
    )


  }
