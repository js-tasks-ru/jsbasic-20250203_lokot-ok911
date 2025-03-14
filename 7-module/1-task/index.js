import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {

  constructor(categories) {
    this.categories = categories;
    this._container = this.#render();
    this.#scrollRibbon();
    this.#selectCategory();
  }

  get elem() {
    return this._container;
  }

  #render() {
    const ribbon = createElement(`
  <div class="ribbon">
    <!--Кнопка прокрутки влево-->
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    <nav class="ribbon__inner">
      ${this.categories.map(category => `<a href="#" class="ribbon__item" data-id=${category.id}>${category.name}</a>`).join("")}
    </nav>
    <button class="ribbon__arrow ribbon__arrow_right">
      <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>
    ` );
    ribbon.querySelector(".ribbon__inner").firstElementChild.classList.add("ribbon__item_active");
    return ribbon;
  }

  #scrollRibbon() {
    this.ribbonInner = this.elem.querySelector(".ribbon__inner");
    this.scrollLeftButton = this.elem.querySelector(".ribbon__arrow_left");
    this.scrollRightButton = this.elem.querySelector(".ribbon__arrow_right");
    this.scrollLeftButton.classList.remove('ribbon__arrow_visible');
    this.scrollRightButton.classList.add('ribbon__arrow_visible');

    this.scrollLeftButton.addEventListener('click', () => {
      this.ribbonInner.scrollBy(-350, 0);
    });

    this.scrollRightButton.addEventListener('click', () => {
      this.ribbonInner.scrollBy(350, 0);
    });

    this.ribbonInner.addEventListener('scroll', () => {
      this.scrollLeftButton.classList.add('ribbon__arrow_visible');
      this.scrollLeft = this.ribbonInner.scrollLeft;
      this.scrollWidth = this.ribbonInner.scrollWidth;
      this.clientWidth = this.ribbonInner.clientWidth;
      this.scrollRight = this.scrollWidth - this.scrollLeft - this.clientWidth;
      if (this.scrollRight < 1) {
        this.scrollRightButton.classList.remove('ribbon__arrow_visible');
      }
      if (this.scrollLeft < 1) {
        this.scrollLeftButton.classList.remove('ribbon__arrow_visible');
      }
    });
  }

  #selectCategory() {
    this.categoriesList = this.elem.querySelectorAll('.ribbon__item');
    for (let i = 0; i < this.categoriesList.length; i++) {
      console.log(this.categoriesList[i]);
      this.categoriesList[i].addEventListener("click", (event) => {
        event.preventDefault();
        this.categoriesList[i].classList.add('ribbon__item_active');

        for (let j = 0; j < this.categoriesList.length; j++)
          if (this.categoriesList[j].classList.contains('ribbon__item_active')
            && this.categoriesList[j].dataset.id != this.categoriesList[i].dataset.id) {
            this.categoriesList[j].classList.remove('ribbon__item_active');
          }

        const myEvent = new CustomEvent('ribbon-select', {
          detail: this.categoriesList[i].dataset.id,
          bubbles: true
        })
        this.categoriesList[i].dispatchEvent(myEvent);
      });
    }
  }
}
