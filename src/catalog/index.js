import { ItemCard } from "../card-view/item-card";
import catalog from "./catalog.json";
import { cartManager } from "../cart/cart-manager";

const html = (strings, ...values) => {
  return String.raw(strings, ...values);
};

const app = document.getElementById("app");
const list = document.createElement("div");

list.className =
  "grid grid-cols-1 gap-2 lg:grid-cols-4 md:grid-cols-2 lg:gap-8 p-5 sm:p-10 m-auto";

list.innerHTML = `
${catalog.jewelleries.map((jewelry) => ItemCard(jewelry)).join("")}`;

list.querySelectorAll("[data-add-cart-id]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const id = Number(button.dataset.addCartId);
    const buttonText = button.querySelector("span");

    if (cartManager.has(id)) {
      cartManager.remove(id);
      buttonText.textContent = "Добавить в корзину";
    } else {
      cartManager.add(id);
      buttonText.textContent = "Удалить из корзины";
    }
  });
});

app.appendChild(list);
