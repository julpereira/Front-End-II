const titulo = document.querySelector('h1');
titulo.remove();
// console.log(titulo.innerHTML);
// console.log(titulo.innerText);
// console.log('textContent:',titulo.textContent);

// titulo.textContent = 'Meu novo parágrafo'

const body = document.querySelector('body');
const ancora = document.createElement('a');
ancora.setAttribute('href', 'https://www.ifro.edu.br');
ancora.setAttribute('target','_blank');
ancora.style.color = '#03417a';
ancora.style.textDecoration = 'none';
ancora.style.fontWeight = 'bold';
ancora.style.fontSize = '40px';
ancora.style.fontFamily = 'Franklin Gothic Medium', 'Arial Narrow';
ancora.textContent= 'IFRO';

body.appendChild(ancora);
body.style.background  = '#b0b0b08c';



const lista = document.createElement('ul');
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');

item1.textContent = 'Item-1';
item2.textContent = 'Item-2';
item3.textContent = 'Item-3';

lista.append(item1);
lista.append(item2);
lista.append(item3);
body.append(lista);