import catalog from "./catalog.json";

const html = (strings, ...values) => {
  return String.raw(strings, ...values);
};

const app = document.getElementById("app");
const list = document.createElement("div");

list.className =
  "grid grid-cols-1 gap-2 lg:grid-cols-4 md:grid-cols-2 lg:gap-8 p-5 sm:p-10 m-auto";

list.innerHTML = `
${catalog.jewelleries
  .map(
    (jewelry) => html`
      <a href="/item/?id=${jewelry.id}" class="flex rounded-lg gap-2 flex-col">
        <img
          class="aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75"
          src="${jewelry.photo}"
        />
        <div class="pt-2">
          <h3 class="text-lg/tight font-medium text-gray-900">
            ${jewelry.title}
          </h3>
          <p class="mt-0.5 text-gray-700">${jewelry.description}</p>
        </div>
      </a>
    `
  )
  .join("")}`;

app.appendChild(list);
