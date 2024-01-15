import { ItemCard } from "../card-view/item-card";
import { cartManager } from "../cart/cart-manager";

const html = (strings, ...values) => {
  return String.raw(strings, ...values);
};

const createNodeFromHtml = (html) => {
  const element = document.createElement("div");

  element.innerHTML = html;

  return element;
};

const app = document.getElementById("app");
const cartView = document.createElement("div");
const list = document.createElement("div");

list.className =
  "grid grid-cols-1 gap-2 lg:grid-cols-4 md:grid-cols-2 lg:gap-8 py-10 m-auto";

const refreshCart = () => {
  const matchedJewelries = cartManager.getSavedItems();

  list.innerHTML = `
${matchedJewelries.map((jewelry) => ItemCard(jewelry)).join("")}`;

  list.querySelectorAll("[data-add-cart-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const id = Number(button.dataset.addCartId);

      if (cartManager.has(id)) {
        cartManager.remove(id);
      } else {
        cartManager.add(id);
      }

      refreshCart();
    });
  });

  const hasItems = matchedJewelries.length > 0;
  const blocks = [
    !hasItems ? null : list,
    hasItems ? null : createNodeFromHtml("<div>Ваша корзина пуста</div>"),
    !hasItems
      ? null
      : createNodeFromHtml(html`
          <div class="flex flex-col gap-3">
            <h3 class="text-xl">Оформить заказ</h3>
            <p class="text-gray-900">
              Общая сумма заказа: $${cartManager.totalAmount()}
            </p>
            <form class="flex flex-col gap-3 pt-5">
              <div class="flex flex-col gap-1">
                <label class="text-gray-600">Номер телефона </label>

                <input
                  placeholder="+7 999 999-99-99"
                  class="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </form>
            <div>
              <button
                class="flex gap-1 items-center justify-center mt-2 px-4 py-2 text-amber-800 bg-amber-100 rounded-lg duration-150 hover:bg-amber-200 active:bg-amber-300"
              >
                Заказать
              </button>
            </div>
          </div>
        `),
  ];

  cartView.replaceChildren(...blocks.filter(Boolean));
};

refreshCart();

app.appendChild(cartView);
