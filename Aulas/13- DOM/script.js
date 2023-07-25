// ACESSANDO ELEMENTOS:

// 1- Por Tag:
console.log("Tag:")

var titulo = document.getElementsByTagName('h1')[0];
console.log(titulo);

var lis = document.getElementsByTagName('li');
console.log(lis);

// 2- Por ID:
console.log("ID:")

var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);

var ul = document.getElementById('lista')
console.log(ul);

// 3- Por Class:
console.log("Class:")

var itensDaLista = document.getElementsByClassName("item");
console.log(itensDaLista);

// 4- querySelectorAll:
console.log("querySelectorAll:");

var itensQuery = document.querySelectorAll('#lista li');
console.log(itensQuery);

var itensQuery2 = document.querySelectorAll('#lista2 li')
console.log(itensQuery2);



// ALTERAR CONTEÚDO DO ELEMENTO:

// 1- innerHTML:
var title = document.querySelector('#title');

title.innerHTML = "Testando o texto alterado!";

// 2- textContent: -> mais utilizado e recomendado
var subtitle = document.querySelector('.subtitle');

subtitle.textContent = "Testando o textContent";



// CRIANDO ELEMENTOS:
console.log("Criando elementos:")

// 1- Inserindo no body:
var body = document.querySelector('body');
var novoParagrafo = document.createElement('p');
var texto = document.createTextNode("Este é o conteúdo do parágrafo");

novoParagrafo.appendChild(texto);
console.log(novoParagrafo);

body.appendChild(novoParagrafo);

// 2- Inserindo no container:
var container = document.getElementById('container');
var span = document.createElement("span");

span.appendChild(document.createTextNode("Texto do span"));

console.log(span);
container.appendChild(span);



// REMOVENDO ELEMENTOS:
console.log("Removendo elementos:")

// 1- removendo elemento filho:
var container = document.querySelector('#container');
var p = document.querySelector('#container p');

container.removeChild(p);

// 2- remover elemento:
var removido = document.querySelector('#removido');

removido.remove();



// ADICIONANDO ELEMENTO: