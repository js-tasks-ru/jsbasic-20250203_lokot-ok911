import createElement from '../../assets/lib/create-element.js';

export default class Carousel {

  constructor(slides) {
    this.slides = slides;
    this._container = this.#renderCarousel();
    this.index = 0;
    this.#initCarouselEvents();
  }

  get elem() {
    return this._container;
  }

  #renderCarousel() {
    const carousel = createElement(`
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="../../assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">
    ${this.slides.map(slide =>
      `
        <div class="carousel__slide" data-id=${slide.id}>
          <img src="../../assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `)}

      </div>
    </div>`);
    return carousel;
  }

  #showSlide() {
    this.sliderWidth = this.slideList[this.index].offsetWidth;
    this.scroll.style.transform = `translateX(-${this.sliderWidth * this.index}px)`;
  }

  #productAdd = () => {
    const myEvent = new CustomEvent("product-add", {
      detail: this.slideList[this.index].dataset.id,
      bubbles: true
    });
    this.elem.dispatchEvent(myEvent);
  }

  #initCarouselEvents() {
    this.buttonRight = this.elem.querySelector('.carousel__arrow_right');
    this.buttonLeft = this.elem.querySelector('.carousel__arrow_left');
    this.slideList = this.elem.querySelectorAll('.carousel__slide');
    this.scroll = this.elem.querySelector('.carousel__inner');
    this.buttonLeft.style.display = 'none';

    this.buttonRight.addEventListener('click', () => {
      this.index++;
      this.buttonLeft.style.display = '';
      if (this.index == this.slideList.length - 1) {
        this.buttonRight.style.display = 'none';
      }
      this.#showSlide();
    });

    this.buttonLeft.addEventListener('click', () => {
      this.index--;
      if (this.index == 0) {
        this.buttonLeft.style.display = 'none';
      }
      this.buttonRight.style.display = '';
      this.#showSlide();
    });

    this.elem.addEventListener('click', this.#productAdd);
  }
}

