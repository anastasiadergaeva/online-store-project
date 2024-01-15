const cartIcon = document.querySelector("#cart-icon");
cartIcon.addEventListener("click", function () {
  window.location.href = "/cart/";
});

const linkCard = document.querySelector("#link-to-card");
linkCard.addEventListener("click", function () {
  window.location.href = "/card/";
});

const linkToCard = document.querySelector("#goods-card");
linkToCard.addEventListener("click", function () {
  window.location.href = "/card/";
});

// carousel start

document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector(".carousel-inner");
  let currentIndex = 0;
  let data; // Store data globally

  // Function to create product card
  function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "card product-card";
    card.innerHTML = `
      <img src="${product.photo}" class="card-img-top" alt="${product.title}">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">${product.price}${product.currency}</p>
      </div>
    `;
    return card;
  }

  // Function to create product cards group
  function createProductCardsGroup(products) {
    const group = document.createElement("div");
    group.className = "carousel-item d-flex justify-content-around";
    products.forEach((product) => {
      const card = createProductCard(product);
      group.appendChild(card);
    });
    return group;
  }

  // Function to update the carousel with product data
  function updateCarousel() {
    carouselInner.innerHTML = "";
    const productsGroup = [
      data.jewelleries[(currentIndex + 0) % data.jewelleries.length],
      data.jewelleries[(currentIndex + 1) % data.jewelleries.length],
      data.jewelleries[(currentIndex + 2) % data.jewelleries.length],
    ];
    const group = createProductCardsGroup(productsGroup);
    carouselInner.appendChild(group);
    // Activate the first item
    carouselInner.firstElementChild.classList.add("active");
  }

  // Function to update the current index in a circular loop
  function updateIndex(delta) {
    currentIndex =
      (currentIndex + delta + data.jewelleries.length) %
      data.jewelleries.length;
  }

  // Fetch data from JSON file
  fetch("/catalog/catalog.json")
    .then((response) => response.json())
    .then((receivedData) => {
      data = receivedData; // Store data globally
      // Set initial state
      updateCarousel();

      // Handle Next button click
      document
        .querySelector(".carousel-control-next")
        .addEventListener("click", () => {
          updateIndex(1);
          updateCarousel();
        });

      // Handle Previous button click
      document
        .querySelector(".carousel-control-prev")
        .addEventListener("click", () => {
          updateIndex(-1);
          updateCarousel();
        });
    })
    .catch((error) => console.error("Error loading data:", error));
});
