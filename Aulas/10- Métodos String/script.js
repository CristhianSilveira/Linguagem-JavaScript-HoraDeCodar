// length
var nome = "Cristhian";
console.log(nome.length);

var obj = "bola";
console.log(obj.length);


// indexOf OBS: conta os espaços
console.log("indexOf:")

var frase = "O rato roeu a roupa do rei de Roma";
console.log(frase.indexOf("roeu"));


// slice
console.log("slice:")

var roeu = frase.slice(7, 11);
console.log(roeu);


// replace
console.log("replace:")

var novaFrase = frase.replace("roeu", "testou");
console.log(novaFrase);


// toLowerCase e toUpperCase
console.log("toLowerCase e toUpperCase:")

var frase2 = "Esta é a frase que vamos manipular";
var fraseCaixaAlta = frase2.toUpperCase();

console.log(fraseCaixaAlta);
console.log(fraseCaixaAlta.toLowerCase());


// trim
console.log("trim:")

var nome2 = "     Matheus     ";
var nomeTrim = nome2.trim();

console.log(nome2);
console.log(nomeTrim);


// lastindexOf:
console.log("lastindexOF:")

var frase3 = "Eu quero a última palavra teste desta frase de teste";
console.log(frase3.lastIndexOf("teste"));


//