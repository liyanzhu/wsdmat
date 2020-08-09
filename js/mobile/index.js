var shouye = document.querySelector('.header .shouye .shou');
var daohang = document.querySelector('.header .shouye .daohang');
var aboutus = document.querySelector('.header .shouye .daohang .aboutus');
var product = document.querySelector('.header .shouye .daohang .proinstro');

shouye.ontouchend = function () {
  // daohang.style.top = 0;
  animate(daohang, {
    top: 0
  }, 500)
}