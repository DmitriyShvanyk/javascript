// marquee
export default class Marquee {

    constructor(container) {
        this.container = container;
        this.animate();
    }

    animate() {
        let marqueeInner = this.container.querySelector('.marquee__inner');
        let marqueeInnerChilds = marqueeInner.children;
        let marqueeInnerChildsLen = marqueeInnerChilds.length;

        for (let i = 0; i < marqueeInnerChildsLen; i++) {
            marqueeInner.appendChild(marqueeInnerChilds[i].cloneNode(true));
        }

        marqueeInner.style.animationDuration = '1s,' + (marqueeInnerChildsLen * 2) + 's';
    }

}