import '../pages/index.css'

// marquee
import '../blocks/marquee/marquee.css'
import Marquee from '../blocks/marquee/marquee.js'


window.addEventListener('DOMContentLoaded', () => {
  let marqueeElem = document.querySelectorAll('.marquee');
  marqueeElem.forEach(el => new Marquee(el));
});


