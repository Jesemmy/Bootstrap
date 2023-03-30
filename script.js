import { CountUp } from './countUp.min.js';

new Typed('#typed', {
    strings: ['Kenneozy Farms'],
    typeSpeed: 50,
    loop: true
  });


  window.onload = function() {
    var countUp = new CountUp('counter', 2000)
    countUp.start();
  }

  AOS.init()