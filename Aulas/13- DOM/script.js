// ACESSANDO ELEMENTOS:

// 1- Por Tag:
console.log("Tag:")

var titulo = document.getElementsByTagName('h2')[0];
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
var altera = document.querySelector('#altera');

altera.innerHTML = "Testando o texto alterado!";

// 2- textContent: -> mais utilizado e recomendado
var subtitle = document.querySelector('.subtitle');

subtitle.textContent = "Testando o textContent";



// CRIANDO ELEMENTOS:
console.log("Criando elementos:")

// 1- Inserindo no body:
var criar = document.querySelector('#cria');
var novoParagrafo = document.createElement('p');
var texto = document.createTextNode("Este é o conteúdo do parágrafo");

novoParagrafo.appendChild(texto);
console.log(novoParagrafo);

criar.appendChild(novoParagrafo);

// 2- Inserindo no container:
var container = document.getElementById('container');
var span = document.createElement("span");

span.appendChild(document.createTextNode("Texto do span"));

console.log(span);
container.appendChild(span);



// REMOVENDO ELEMENTOS:
console.log("Removendo elementos:")

// 1- removendo elemento filho:
var exclua = document.querySelector('#exclui');
var p = document.querySelector('#exclui p');

exclua.removeChild(p);

// 2- remover elemento:
var removido = document.querySelector('#removido');

removido.remove();



// ADICIONANDO ELEMENTO:
console.log("Adicionando Elementos:")

// 1- appendChild:
var conteudo = document.querySelector("#conteudo");
var elemento = document.createElement("div");

elemento.classList = "div-criada";
conteudo.appendChild(elemento);

// 2- insertBefore:
var elemento2 = document.querySelector("#conteudo .div-criada");
var elemento3 = document.createElement("div");
elemento3.classList = "div-before";

conteudo.insertBefore(elemento3, elemento2);



// TROCANDO ELEMENTOS:
console.log("Trocando Elementos:");

var elemento4 = document.createElement("h3");
elemento4.classList = "testando-classe";

var texto = document.createTextNode("Este é o texto do h3");
elemento4.appendChild(texto);

var trocar = document.querySelector("#troca");
var pai = trocar.parentNode;
pai.replaceChild(elemento4, trocar);



// ALTERANDO ATRIBUTOS:
var btn = document.querySelector("#btn");
btn.setAttribute("disabled", "disabled");

var altera = document.querySelector('.altera');
altera.setAttribute("class", "alterei-classe");



// ADICIONANDO CSS PELO DOM:

// 1- Adicionando 1 por 1:
var comCSS = document.querySelector('#teste-css');
comCSS.style.color = 'red';
comCSS.style.backgroundColor = "yellow";

// 2- Adicionando vários estilos:
comCSS.style.cssText = "color: red; background-Color: yellow; text-decoration: underline;"



// PROPRIEDADE DOCUMENT
console.log("Propriedade Document:")

console.log(document.body);
console.log(document.head);

console.log(document.links[0]);
document.links[0].textContent = "Twitter";

console.log(document.URL);

console.log(document.title);
document.title = "Aprendendo DOM";
console.log(document.title);