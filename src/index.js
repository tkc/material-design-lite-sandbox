'use strict';

class Event {

  constructor(baseClassName, cssName) {
    this.className = baseClassName;
    this.cssName = cssName;
    const titleElmName = baseClassName + ' .title';
    this.titleElm = document.querySelector(titleElmName);
    const itemElmName = baseClassName + ' .item';
    const itemElm = document.querySelector(itemElmName);
    this.itemElm = itemElm;
    this.changeTitle();
    this.addEvent();
  }

  changeTitle() {
    this.titleElm.innerHTML = this.cssName;
  }
  
  addEvent() {
    this.itemElm.addEventListener('mouseover', () => {
      console.log('fire');
      this.itemElm.classList.add(this.cssName);
    });

    this.itemElm.addEventListener('mouseout', () => {
      const self = this;
      setTimeout(function () {
        console.log('out');
        self.itemElm.classList.remove(self.cssName);
      }, 500);
    });
  }
}

new Event('.sample1', 'bounceOutLeft');
new Event('.sample2', 'fadeIn');
new Event('.sample3', 'fadeInDown');
new Event('.sample4', 'fadeInUp');
new Event('.sample5', 'fadeInDuration3');
new Event('.sample6', 'bounce');
new Event('.sample7', 'shake');
