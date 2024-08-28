// single elements
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

// multiple elements
// console.log (document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'))
// console.log(document.querySelectorAll('li'));

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'hello';
ul.children[1].innerText = 'boris';
ul.lastElementChild.innerHTML = '<h1>item3<h1\>'