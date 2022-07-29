import '../pages/index.css'
import Slider from '../blocks/slider/slider.js'

const sliderPreviewImage = document.querySelector('.slider__preview-image');
const sliderPreviewText = document.querySelector('.slider__preview-text');
const sliderBtnPrev = document.querySelector('.slider__control--prev');
const sliderBtnNext = document.querySelector('.slider__control--next');
const sliderItems = document.querySelectorAll('.slider__item');

const slider = new Slider(sliderItems, sliderPreviewImage, sliderPreviewText);

sliderBtnPrev.addEventListener('click', ()=> {
  slider.prev();
});

sliderBtnNext.addEventListener('click', ()=> {
  slider.next();
});