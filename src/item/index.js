import { ItemCard } from "../card-view/item-card";
import { cartManager } from "../cart/cart-manager";
import catalog from "../catalog/catalog.json";

const html = (strings, ...values) => {
  return String.raw(strings, ...values);
};

const app = document.getElementById("app");
const list = document.createElement("div");
const params = new URL(document.location).searchParams;

const jewelryId = Number(params.get("id"));
const matchedJewelries = catalog.jewelleries.filter((d) => d.id === jewelryId);

list.className =
  "grid grid-cols-1 gap-2 lg:grid-cols-4 md:grid-cols-2 lg:gap-8 py-10 m-auto";

list.innerHTML = `
${matchedJewelries.map((jewelry) => ItemCard(jewelry, true)).join("")}`;

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
