export function updateRangeInputBg(el) {
  const colorStart = el.dataset.colorStart;
  const colorEnd = el.dataset.colorEnd;
  el.style.background = `linear-gradient(to right, ${colorStart} 0%, ${colorStart} ` + ((el.value * 100 / (el.max - 1)) - (100 / el.max)) + `%, ${colorEnd} ` + ((el.value * 100 / (el.max - 1)) - (100 / el.max)) + `%, ${colorEnd} 100%)`
}

export function updateRangeNum(el) {
  el.closest('.range').querySelector('.range__num').textContent = parseFloat(el.value, 10);
}