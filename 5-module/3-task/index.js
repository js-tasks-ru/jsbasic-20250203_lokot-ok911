function initCarousel() {
  const buttonRight = document.querySelector('.carousel__arrow_right');
  const buttonLeft = document.querySelector('.carousel__arrow_left');
  const slideList = document.querySelectorAll('.carousel__slide'); 
  const scroll = document.querySelector('.carousel__inner');
  let index = 0;
  buttonLeft.style.display = 'none';

  function showSlide() {
    let sliderWidth = slideList[index].offsetWidth;
    scroll.style.transform = `translateX(-${sliderWidth*index}px)`;
  }

  buttonRight.addEventListener ('click', () => {
    index++;
    buttonLeft.style.display = '';
    if (index == slideList.length - 1) {
      buttonRight.style.display = 'none';
    }
    showSlide();
  });

  buttonLeft.addEventListener ('click', () => {
      index--;
      if (index == 0) {
        buttonLeft.style.display = 'none';
      }
      buttonRight.style.display = '';
      showSlide();
   });
}
