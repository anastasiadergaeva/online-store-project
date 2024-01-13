import { jewelleries } from "../catalog/catalog.json";

export class CartManager {
  addedItems: number[] = [];

  constructor() {
    this.restore();
  }

  has(id) {
    return this.addedItems.includes(id);
  }

  add(id) {
    if (!this.has(id)) {
      this.addedItems.push(id);
    }

    this.synchronize();
  }

  remove(id) {
    this.addedItems = this.addedItems.filter((d) => d !== id);

    this.synchronize();
  }

  synchronize() {
    console.log("new state: ", this.addedItems);
    localStorage.setItem("cart", JSON.stringify(this.addedItems));
  }

  restore() {
    const savedValue = localStorage.getItem("cart");

    if (savedValue) {
      this.addedItems = JSON.parse(savedValue);
    }
  }

  getSavedItems() {
    return this.addedItems.map((id) =>
      jewelleries.find((jewelry) => jewelry.id === id)
    );
  }

  totalAmount() {
    return this.getSavedItems().reduce(
      (accumulator, nextValue) => accumulator + nextValue!.price,
      0
    );
  }
}

const cartManager = new CartManager();

export { cartManager };
