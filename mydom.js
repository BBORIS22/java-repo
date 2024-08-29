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
// ul.firstElementChild.textContent = 'hello';
// ul.children[1].innerText = 'boris';
// ul.lastElementChild.innerHTML = '<h1>item3<h1\>'

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

const btn = document.querySelector('.btn');

btn.addEventListener('click',(e) =>{
    e.preventDefault();
document.querySelector('#my-form').style.background = 
'#ccc';
document.querySelector('body').classList.add('bg-dark');
document.querySelector('.items').lastElementChild.innerHTML = '<h1>hello<\h1>'
});