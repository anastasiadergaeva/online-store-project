import"./modulepreload-polyfill-9p4a8sJU.js";import{c as l,I as n,a as d}from"./item-card-H8M3J5qq.js";const o=document.getElementById("app"),t=document.createElement("div");t.className="grid grid-cols-1 gap-2 lg:grid-cols-4 md:grid-cols-2 lg:gap-8 p-5 sm:p-10 m-auto";t.innerHTML=`
${l.jewelleries.map(e=>n(e)).join("")}`;t.querySelectorAll("[data-add-cart-id]").forEach(e=>{e.addEventListener("click",c=>{c.preventDefault();const a=Number(e.dataset.addCartId),r=e.querySelector("span");d.has(a)?(d.remove(a),r.textContent="Добавить в корзину"):(d.add(a),r.textContent="Удалить из корзины")})});o.appendChild(t);
