import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  
  constructor(product) {
    this.product = product;
    this._container = this.#renderCard();
    this.#addEvent();
  }

  get elem() {
    return this._container;
  }

  #renderCard() {
    const productCard = createElement(`
      <div class="card">
      <div class="card__top">
        <img src="/jsbasic-20250203_lokot-ok911/assets/images/products/${this.product.image}" class="card__image" alt="product">
        <span class="card__price">€${this.product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${this.product.name}</div>
        <button type="button" class="card__button">
          <img src="/jsbasic-20250203_lokot-ok911/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`)
    return productCard;
  }

  #productAdd = () => {
    const myEvent = new CustomEvent("product-add", {
      detail: this.product.id, 
      bubbles: true
  });
     this.elem.dispatchEvent(myEvent);
  }

  #addEvent() {
    this.elem.addEventListener('click', this.#productAdd);
  }
}
