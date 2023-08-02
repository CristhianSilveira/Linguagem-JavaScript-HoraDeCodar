// MATRIZES:
/* 
OU const lista = [
    "arroz",
    "feijão",
    "macarrão",
    "leite"
];
*/

// OU const lista = new Array("arroz", "feijão", "macarrão", "leite");

/*
OU const lista = [];
lista[0] = "arroz";
lista[1] = "feijão";
lista[2] = "macarrão";
lista[3] = "leite";
*/

const lista = ["Arroz", "Feijão", "Macarrão", "Leite"];

console.log(lista[0]);
console.log(lista[3]);

console.log(lista);


// Alterando valor de um array:
console.log("Alterando valor de um array:");

lista[0] = "Café";
console.log(lista[0]);

console.log(lista);


// Tamanho da matriz:
console.log("Tamanho da matriz:");

console.log(lista.length);


// Último elemento da matriz:
console.log("Último elemento da matriz:");

console.log(lista[lista.length - 1]);
console.log(lista);


// Adicionando um elemento na última posição da matriz:
console.log("Adicionando um elemento na matriz:");

lista.push("Manteiga");

console.log(lista[4]);
console.log(lista);


// Remover o último elemento da matriz:
console.log("Removendo o último elemento da matriz:");

console.log(lista[4]);

lista.pop();
console.log(lista);

// Remover o primeiro elemento da matriz:
console.log("Removendo o primeiro elemento da matriz:");

console.log(lista[0]);

lista.shift();
console.log(lista);


// Adicionando um elemento na primeira posição da matriz:
console.log("Adicionando um elemento na primeira posição da matriz:");

lista.unshift("Maionese");

console.log(lista[0]);
console.log(lista);


// Adicionando um ou vários elementos em uma posição especifica:
console.log("Adicionando vários elementos em uma posição:")

lista.splice(2, 0, "Açúcar", "Danone");
console.log(lista);
//OBS: (O primeiro parâmetro (2) define a posição onde novos elementos devem ser adicionados. O segundo parâmetro (0) define quantos elementos devem ser removidos)


// Concatenando matrizes:
console.log("Concatenando matrizes:")

const lista1 = ["Banana", "Maça", "Uva", "Abacaxi"];
console.log(lista1);
const lista2 = ["Carne", "Frango", "Linguiça", "Peixe"];
console.log(lista2);

const listaCompleta = lista1.concat(lista2);
console.log(listaCompleta);


// Ordenando matriz em ordem alfabética:
console.log("Ordem alfabética:")

const nomes = ["Bruna", "Daniel", "Ana", "Carlos"];
nomes.sort();

console.log(nomes)


// Transformando um array em string
console.log("Transformando um array em string:");

console.log(lista.join(" -> ")); //coloca -> em todos os espaços em branco da matriz


