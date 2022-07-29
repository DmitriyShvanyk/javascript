import { updateRangeInputBg, updateRangeNum } from '../blocks/range/range'
import { updateTotalPrice } from '../blocks/calc/calc'
import '../pages/index.css'

const form = document.querySelector('.calc__form');
const controls = document.querySelectorAll('.range__control');

controls.forEach(control => {
  updateRangeNum(control);
  updateRangeInputBg(control);
  updateTotalPrice(control);
});

function onChange(e) {
  updateRangeNum(e.target);
  updateRangeInputBg(e.target);
  updateTotalPrice(e.target);
}

form.addEventListener('input', (e) => {
  e.preventDefault();
  onChange(e);
});