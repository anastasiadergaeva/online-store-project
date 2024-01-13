import { cartManager } from "../cart/cart-manager";
import catalog from "../catalog/catalog.json";

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
${matchedJewelries
  .map(
    (jewelry) => html`
      <div
        href="/item/?id=${jewelry.id}"
        class="flex rounded-lg gap-2 flex-col max-w-[350px]"
      >
        <img
          class="max-w-[350px] aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75"
          src="${jewelry.photo}"
        />
        <div class="pt-2">
          <h3 class="text-lg/tight font-medium text-gray-900">
            ${jewelry.title}
          </h3>
          <p class="mt-0.5 text-gray-700">${jewelry.description}</p>
          <p class="mt-3 text-lg font-light text-gray-900">$${jewelry.price}</p>
          <button
            data-add-cart-id="${jewelry.id}"
            class="flex gap-1 items-center justify-center mt-2 px-4 py-2 text-amber-800 bg-amber-100 rounded-lg duration-150 hover:bg-amber-200 active:bg-amber-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span
              >${cartManager.has(jewelry.id)
                ? "Удалить из корзины"
                : "Добавить в корзину"}</span
            >
          </button>
        </div>
      </div>
    `
  )
  .join("")}`;

  list.querySelectorAll("[data-add-cart-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = Number(button.dataset.addCartId);
      const buttonText = button.querySelector("span");

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
