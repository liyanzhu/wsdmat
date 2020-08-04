var tecon = document.querySelector('.tecon');
console.log(tecon);
var docters = document.querySelectorAll('.techange div')
var items = document.querySelectorAll('.tecon div');
for (let i = 0; i < docters.length; i++) {
  docters[i].onmouseover = function () {
    // animate(tecon, {
    //   "margin-left": -i * 900
    // }, 500);

    for (let j = 0; j < docters.length; j++) {
      items[j].style.display = 'none';
      docters[j].style.backgroundColor = '#1e82e8';
    }
    docters[i].style.backgroundColor = '#1eb8e8';
    items[i].style.display = 'block';
  }
}
