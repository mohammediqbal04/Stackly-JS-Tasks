const container = document.getElementById("productContainer");
const errorMsg = document.getElementById("errorMsg");

fetch("https://fakestoreapi.com/products")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  })
  .then(data => {
    data.forEach(product => {
      const div = document.createElement("div");
      div.classList.add("product");

      div.innerHTML = `
        <h4>${product.title}</h4>
        <img src="${product.image}" alt="${product.title}">
        <p>Price: $${product.price}</p>
        <button>Buy Now</button>
      `;

      container.appendChild(div);
    });
  })
  .catch(error => {
    errorMsg.textContent = error.message;
    errorMsg.style.color = "red";
  });
