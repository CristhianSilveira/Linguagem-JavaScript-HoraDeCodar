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

// querySelector

