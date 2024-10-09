const itensMenu = [
    { nome: 'Início', url: 'index.html'},
    { nome: 'Sobre', url: '#'},
    { nome: 'Contato', url:'#'}
];

function criarMenu() {
const header = document.createElement('header');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
 
header.appendChild(nav);
nav.appendChild(ul);

itensMenu.forEach(item => {
const li = document.createElement('li');
const a = document.createElement('a');
a.href = item.url;
a.textContent = item.nome.toUpperCase();
a.style.textDecoration = 'none';
a.style.color = 'white';
li.appendChild(a);
ul.appendChild(li);
});

document.body.appendChild(header);
}

function estilizarMenu() {
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const ul = document.querySelector('ul');

header.style.backgroundColor = '#071D41';
header.style.fontFamily = 'Arial';
ul.style.height = '40px';
ul.style.display = 'flex';
ul.style.justifyContent = 'center';
ul.style.alignItems = 'center';
ul.style.gap = '20px';
ul.style.listStyleType = 'none';
}

criarMenu();
estilizarMenu();