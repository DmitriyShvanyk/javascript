export default class Slider {
  constructor(slides, preview, previewText) {
    this._slides = slides;
    this._preview = preview;
    this._previewText = previewText;
    this._current = 0;
  }
  _goTo(n) {
    this._slides[this._current].classList.remove('slider__item--active');
    this._current = (n + this._slides.length) % this._slides.length;
    this._slides[this._current].classList.add('slider__item--active');
    this._preview.src = this._slides[this._current].querySelector('.slider__image').src;
    this._previewText.textContent = this._slides[this._current].querySelector('.slider__image').alt;
  }
  prev() {
    this._goTo(this._current - 1);
  }
  next() {
    this._goTo(this._current + 1);
  }
}