import createElement from '../../assets/lib/create-element.js';

export default class Modal {

  constructor() {
    this.elem = this.#render();
  }

#render() {
  this.modal = createElement(`
    <div class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__inner">
      <div class="modal__header">
        <button type="button" class="modal__close">
          <img src="../../assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>
        <h3 class="modal__title">
        </h3>
      </div>
      <div class="modal__body">
      </div>
    </div>
  </div>
  `)
  return this.modal;
}

  open() {
    let body = document.querySelector('body');
    body.classList.add("is-modal-open");
    body.appendChild(this.elem);
    document.querySelector('.modal__close').addEventListener('click', () => {
      this.close();
    });
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        this.close();
      }
    });
  }

  setTitle(titleText) {
    this.open();
    this.title = document.querySelector(".modal__title");
    this.title.innerHTML = titleText;
  }

  setBody(node) {
    this.open();
    this.modalBody = document.querySelector(".modal__body");
    this.modalBody.innerHTML = '';
    this.modalBody.appendChild(node);
  }

  close() {
    document.querySelector('body').classList.remove("is-modal-open"); 
    this.elem.remove();
  }
}
