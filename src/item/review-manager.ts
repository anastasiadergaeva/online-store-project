export interface Review {
  name: string;
  text: string;
  published: Date;
}

export class ReviewManager {
  addedReviews: Review[] = [];
  itemId: number;

  constructor(itemId: number) {
    this.itemId = itemId;

    this.restore();
  }

  add(review: Review) {
    this.addedReviews.push(review);

    this.synchronize();
  }

  getReviews() {
    return this.addedReviews;
  }

  synchronize() {
    localStorage.setItem(
      `reviews-${this.itemId}`,
      JSON.stringify(this.addedReviews)
    );
  }

  restore() {
    const savedReviews = localStorage.getItem(`reviews-${this.itemId}`);

    if (savedReviews) {
      this.addedReviews = JSON.parse(savedReviews);
    }
  }
}
