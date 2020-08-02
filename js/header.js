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