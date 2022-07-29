// range
export function updateTotalPrice(el) {
  let total = Array.from(el.closest('.calc').querySelectorAll('.range__control')).reduce((a, b) => a * b.value, 1);
  el.closest('.calc').querySelector('.calc__price-total').textContent = total;
}
