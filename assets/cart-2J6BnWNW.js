import"./modulepreload-polyfill-9p4a8sJU.js";import{a,I as m}from"./item-card-H8M3J5qq.js";const p=(t,...e)=>String.raw(t,...e),d=t=>{const e=document.createElement("div");return e.innerHTML=t,e},g=document.getElementById("app"),o=document.createElement("div"),r=document.createElement("div");r.className="grid grid-cols-1 gap-2 lg:grid-cols-4 md:grid-cols-2 lg:gap-8 py-10 m-auto";const s=()=>{const t=a.getSavedItems();r.innerHTML=`
${t.map(l=>m(l)).join("")}`,r.querySelectorAll("[data-add-cart-id]").forEach(l=>{l.addEventListener("click",i=>{i.preventDefault();const n=Number(l.dataset.addCartId);a.has(n)?a.remove(n):a.add(n),s()})});const e=t.length>0,c=[e?r:null,e?null:d("<div>Ваша корзина пуста</div>"),e?d(p`
          <div class="flex flex-col gap-3">
            <h3 class="text-xl">Оформить заказ</h3>
            <p class="text-gray-900">
              Общая сумма заказа: $${a.totalAmount()}
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
        `):null];o.replaceChildren(...c.filter(Boolean))};s();g.appendChild(o);
