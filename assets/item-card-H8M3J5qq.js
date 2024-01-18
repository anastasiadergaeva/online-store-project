const s=[{id:1,item:"bracelet",title:"LOVE BRACELET - BRUSHED FINISH",metal:"yellow gold",price:7350,currency:"$",description:"LOVE bracelet, 18K yellow gold (750/1000), brushed finish. Comes with a screwdriver. Width: 6.1 mm.",photo:"https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw3d4405cf/images/large/91b1733efa5e51ad812f271277503c3d.png?sw=350&sh=350&sm=fit&sfrm=png"},{id:2,item:"ring",title:"LOVE RING",metal:"yellow gold",price:1940,currency:"$",description:"LOVE ring, yellow gold (750/1000). Width: 5.5 mm (for size 52).",photo:"https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw38ed6594/images/large/41bb20649b985d5ea6fc0a93c60b78e4.png?sw=350&sh=350&sm=fit&sfrm=png"},{id:3,item:"ring",title:"LOVE RING",metal:"platinum",price:4e3,currency:"$",description:"LOVE ring, platinum 950/1000. Width: 5.5 mm (for size 52).",photo:"https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw606230ea/images/large/17ebe21bb7a3595fb3130ae85f9c0376.png?sw=750&sh=750&sm=fit&sfrm=png"},{id:4,item:"earrings",title:"LOVE EARRINGS",metal:"yellow gold",price:3650,currency:"$",description:"LOVE earrings, yellow gold 750/1000. Width: 5.7 mm.",photo:"https://www.cartier.sg/content/dam/rcq/car/20/88/27/5/2088275.png.scale.600.high.love-earrings-yellow-gold.png"}],n={jewelleries:s};class i{constructor(){this.addedItems=[],this.restore()}has(e){return this.addedItems.includes(e)}add(e){this.has(e)||this.addedItems.push(e),this.synchronize()}remove(e){this.addedItems=this.addedItems.filter(a=>a!==e),this.synchronize()}synchronize(){console.log("new state: ",this.addedItems),localStorage.setItem("cart",JSON.stringify(this.addedItems)),this.updateCartCounter()}updateCartCounter(){const e=document.getElementById("cartCounter"),a=this.addedItems.length>0;e&&(e.textContent=String(this.addedItems.length),a?e.classList.remove("hidden"):e.classList.add("hidden"))}restore(){const e=localStorage.getItem("cart");e&&(this.addedItems=JSON.parse(e))}getSavedItems(){return this.addedItems.map(e=>s.find(a=>a.id===e))}totalAmount(){return this.getSavedItems().reduce((e,a)=>e+a.price,0)}}const r=new i;r.updateCartCounter();const d=(t,...e)=>String.raw(t,...e),o=(t,e=!1)=>d`<${e?"div":"a"}
    href="/item/?id=${t.id}"
    class="flex rounded-lg gap-2 flex-col max-w-[350px]"
  >
    <img
      class="max-w-[350px] aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75"
      src="${t.photo}"
    />
    <div class="pt-2">
      <h3 class="text-lg/tight font-medium text-gray-900">${t.title}</h3>
      <p class="mt-0.5 text-gray-700 min-h-[70px]">${t.description}</p>
      <p class="mt-3 text-lg font-light text-gray-900">$${t.price}</p>
      <button
        data-add-cart-id="${t.id}"
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
          >${r.has(t.id)?"Удалить из корзины":"Добавить в корзину"}</span
        >
      </button>
    </div>
  </a>`;export{o as I,r as a,n as c};
