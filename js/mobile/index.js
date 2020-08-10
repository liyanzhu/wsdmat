var shouye = document.querySelector('.header .shouye .shou');
var daohang = document.querySelector('.header .shouye .daohang');

shouye.ontouchend = function () {
  console.log('touched');
  // daohang.style.top = 0;
  animate(daohang, {
    top: 0
  }, 500)
}
var swipers = document.querySelectorAll('.swi .swiper');
var swip = document.querySelector('.swi .swip');
var num = 0;
setInterval(() =>{
  num++;
  if (num > swipers.length - 2) {
    animate(swip, {
      "margin-left": -num * 375
    }, 2000, Tween.Linear, function () {
      swip.style.marginLeft = 0;
    })
    num = 0;
  }else {
    animate(swip, {
      "margin-left": -num * 375
    }, 500);
  }


}, 3000)