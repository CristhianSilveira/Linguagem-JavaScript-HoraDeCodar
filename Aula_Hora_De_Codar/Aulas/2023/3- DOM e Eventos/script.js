// DOM - Document Object Model


// Selecionar Elementos:
console.log("Selecionar Elementos:");
// 1- Por ID
const elementoPorId = document.getElementById("meuId");
console.log(elementoPorId);

// 2- Por Tag
const elementoPorTag = document.getElementsByTagName("div[0]");
console.log(elementoPorTag);

// 3- Por Classe
const elementoPorClasse = document.getElementsByClassName("minhaClasse");
console.log(elementoPorClasse);

// 4- Por querySelector -> Mais usado
const elementoPorSelector = document.querySelector("#meuId");
console.log(elementoPorSelector);


// Manipular conteúdo de texto:
console.log("Manipular conteúdo de texto:");
const element = document.querySelector("#meuId");
console.log(element);
// 1- textContent
element.textContent = "Mudei de texto!";
console.log(element.textContent);

// 2- innerHtml
element.innerHTML = "Mudei de novo!";
console.log(element.innerHTML);


// Trabalhando com atributos:
console.log("Manipulando atributos:");
const link = document.querySelector("a")
console.log(link);

// 1- Colocar atributo -> setAttribute()
link.setAttribute("href", "https://horadecodar.com.br/cursos");
console.log(link);

// 2- Remover atributo -> removeAttribute();
link.removeAttribute("target");
console.log(link);


// Manipular classe do CSS
const elemento = document.querySelector("#meuId");

// 1- Adicionar classe
elemento.classList.add("novaClasse");

// 2- Remover Classe
elemento.classList.remove("minhaClasse");

// 3- Verifica se a classe existe ou não
elemento.classList.toggle("outraClasse");


// Manipular o CSS
const elemento1 = document.querySelector("#meuId");

elemento1.style.color = 'blue';
elemento1.style.backgroundColor = 'pink';


// Navegação entre nó
console.log("Manipular nó:");
const elemento4 = document.querySelector("#meuInput");

// 1- Pegar o elemento pai
const pai = elemento4.parentNode;
console.log(pai);

// 2- Obter o primeiro filho
const primeiroFilho = pai.firstChild;
console.log(primeiroFilho);

// 3- Obter o último filho
const ultimoFilho = pai.lastChild;
console.log(ultimoFilho);


// Manipular estrutura do DOM:
console.log("Manipular estrutura do DOM:");

// 1- Criar elemento
const novoElemento = document.createElement("div");
novoElemento.textContent = "Criei div com DOM"
console.log(novoElemento);

// 2- Adicionar elemento em outro elemento -> appendChild
document.body.appendChild(novoElemento);

// 3- Adicionar elemento aonde quiser -> insertBefore(elementoCriado, local)
document.body.insertBefore(novoElemento, pai);

// 4- Remover elemento -> removeChild
document.body.removeChild(elementoPorId);


// Eventos:
console.log("Eventos:");
// 1- Click
const botao = document.querySelector("button");

botao.addEventListener("click", function () {
    console.log("Botão clicado!");
});

// 2- mouse
const elemento5 = document.querySelector("#meuFormulario");
elemento5.addEventListener("mouseover", function () {
    console.log("O mouse passou aqui!");
});

// 3- teclado
const campoInput = document.querySelector("#meuInput");

campoInput.addEventListener("keydown", function () {
    console.log("Tecla pressionada");
});

// 4- Formulário
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form enviado");
});

// 5- propagação de eventos
document.querySelector("#elementoPai").addEventListener("click", function () {
    console.log("Clique capturado no pai");
});

document.querySelector("#elementoFilho").addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Clique capturado no filho");
});