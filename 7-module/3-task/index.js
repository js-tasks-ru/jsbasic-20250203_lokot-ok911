import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {


  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.stepsArray = this.#createStepsArray();
    this._container = this.#render();
    this.sliderChange();
  }

  #createStepsArray() {
    this.array = [...Array(this.steps)];
    for (let i = 0; i < this.array.length; i++) {
      this.array[i] = i;
    }
    return this.array;
  }

  get elem() {
    return this._container;
  }

  #render() {
    const slider = createElement(`
    <div class="slider">
      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb">
        <span class="slider__value">${this.value}</span>
      </div>
      <!--Полоска слайдера-->
      <div class="slider__progress"></div>
      <!-- Шаги слайдера (вертикальные чёрточки) -->
      <div class="slider__steps">
        ${this.stepsArray.map(step => `<span data-action=${step}></span>`).join('')}
      </div>
    </div>
  }`);
    slider.querySelector(".slider__steps").firstElementChild.classList.add("slider__step-active");
    return slider;
  }


  sliderChange() {
    this.elem.addEventListener('click', (event) => {
      console.log(`Координаты клика: X = ${event.clientX}, Y = ${event.clientY}`);
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;    
      let value = Math.round(approximateValue);
      this.value = value;

      this.elem.querySelector(".slider__value").innerHTML = `${this.value}`;
      this.elem.querySelector(`[data-action="${this.value}"]`).classList.add("slider__step-active");

      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');

      let leftPercents = this.value / segments * 100;
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;

      const myEvent = new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      })
      this.elem.dispatchEvent(myEvent);
    })
  }
}


