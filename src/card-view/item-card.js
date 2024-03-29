import { cartManager } from "../cart/cart-manager";

const html = (strings, ...values) => {
  return String.raw(strings, ...values);
};

export const ItemCard = (jewelry, isExtended = false) => {
  return html`<${isExtended ? "div" : "a"}
    href="/item/?id=${jewelry.id}"
    class="flex rounded-lg gap-2 flex-col max-w-[350px]"
  >
    <img
      class="max-w-[350px] aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75"
      src="${jewelry.photo}"
    />
    <div class="pt-2">
      <h3 class="text-lg/tight font-medium text-gray-900">${jewelry.title}</h3>
      <p class="mt-0.5 text-gray-700 min-h-[70px]">${jewelry.description}</p>
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
          >${
            cartManager.has(jewelry.id)
              ? "Удалить из корзины"
              : "Добавить в корзину"
          }</span
        >
      </button>
    </div>
  </a>`;
};
