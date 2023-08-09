// Manipulação de Array: push() e shift()
let lista = [];
lista.push("Arroz", "Feijão", "Carne", "Leite", "Açúcar");
lista.shift();
console.log(lista);


// Manipulação de Array: find()
let numeros = [3, 7, 14, 21, 29, 36, 42];
const divideSete = numeros.find((num) => num > 10 && num % 7 === 0);
console.log(divideSete);


// Manipulação de Array: filter()
let meuArray = [5, 10, 15, 20, 25, 30, 35, 40];
let maiorVinte = meuArray.filter((num) => num > 20);
console.log(maiorVinte);


// Manipulação de String: split() e trim()
let minhaString = " Bom dia, mundo! ";
let removeEspaço = minhaString.trim();
let divideString = removeEspaço.split(" ");
console.log(removeEspaço);
console.log(divideString);


// // Manipulação de String: startsWith() e endsWith()
let minhaString2 = "O rato roeu a roupa do rei de Roma";
let comecaString = minhaString2.startsWith("O")
let terminaString = minhaString2.endsWith("Roma");
console.log(comecaString);
console.log(terminaString);

