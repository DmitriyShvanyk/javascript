let sliderPreviewImage = document.querySelector('.slider__preview-image');
let sliderPreviewText = document.querySelector('.slider__preview-text');
let sliderItems = document.querySelectorAll('.slider__item');
let sliderBtnPrev = document.querySelector('.slider__control--prev');
let sliderBtnNext = document.querySelector('.slider__control--next');
let current = 0;

function goToSlide(n) {
  sliderItems[current].classList.remove('slider__item--active');
  current = (n + sliderItems.length) % sliderItems.length;
  sliderItems[current].classList.add('slider__item--active');
  sliderPreviewImage.src = sliderItems[current].querySelector('.slider__image').src;
  sliderPreviewText.textContent = sliderItems[current].querySelector('.slider__image').alt;
}

function prevSlide() {
  goToSlide(current - 1);
}

function nextSlide() {
  goToSlide(current + 1);
}

for (let i = 0; i < sliderItems.length; i++) {
  sliderItems[i].addEventListener('click', () => {
    goToSlide(i);
  })
}

sliderBtnPrev.addEventListener('click', prevSlide);
sliderBtnNext.addEventListener('click', nextSlide);