var us = document.querySelector('.header .nav .usabout');
var disp = document.querySelector('.header .nav .disp');
var pro = document.querySelector('.header .nav .pro');
var displ = document.querySelector('.header .nav .displ');
us.onmouseover = function () {
  disp.style.display = 'block';
}
disp.onmouseover = function () {
  disp.style.display = 'block';
}
us.onmouseout = function () {
  disp.style.display = 'none';
}
disp.onmouseout = function () {
  disp.style.display = 'none';
}
pro.onmouseover = function () {
  displ.style.display = 'block';
}
displ.onmouseover = function () {
  displ.style.display = 'block';
}
pro.onmouseout = function () {
  displ.style.display = 'none';
}
displ.onmouseout = function () {
  displ.style.display = 'none';
}

//侧边固定
var lis = document.querySelectorAll('.rightfix li');
console.log(lis);
lis[lis.length-1].onclick = function () {
  animate2(document.documentElement, {
    scrollTop: 0
  }, 500)
  // window.scrollTo(0, 0)
}

//轮播图
var swiper = document.querySelector('.swiper')
var box = document.querySelector('.swiper .box');
var swipers = document.querySelectorAll('.swiper .box img')
var winW = parseInt(getComputedStyle(swiper, null).width);
var btns = document.querySelectorAll('.swiper .btns li')
var num = 0;
function move() {
    num++;
    if (num > swipers.length - 2) {
      animate2(box, {
        "margin-left": -num * winW
      }, 500, Tween.Linear, () =>{
        box.style.marginLeft = 0;
      });
      num = 0;
    } else {
      animate2(box, {
        "margin-left": -num * winW
      }, 500)
    }
    for (let i = 0; i < btns.length; i++) {
      btns[i].style.backgroundColor = '#d0d0d0';
    }
    btns[num].style.backgroundColor = '#555';
}
var t = setInterval(move, 3000);

//按钮点击
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    num = i;
    animate2(box, {
      "margin-left": -num * winW
    }, 500);
    for (let j = 0; j < btns.length; j++) {
      btns[j].style.backgroundColor = '#d0d0d0';
    }
    btns[num].style.backgroundColor = '#555';
  }
}

//鼠标的移入移出
swiper.onmouseover = function () {
  clearInterval(t)
}
swiper.onmouseout = function () {
  t = setInterval(move, 3000);
}