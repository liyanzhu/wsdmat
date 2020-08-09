var persons = document.querySelectorAll('.moteam .change .chaitem');
var box = document.querySelector('.box');
for (let i = 0; i < persons.length; i++) {
  persons[i].ontouchend = function () {
    animate(box, {
      "margin-left": -i * 375
    }, 500);
    for (let j = 0; j < persons.length; j++){
      persons[j].className = 'chaitem';

    }
    persons[i].className = 'active chaitem';
  }
}