export class Movie {
  constructor({ id, title, year, price, poster }) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.price = price;
    this.poster = poster;
  }

  get label() {
    return `${this.title} (${this.year}) — ${this.price} kr`;
  }
}
