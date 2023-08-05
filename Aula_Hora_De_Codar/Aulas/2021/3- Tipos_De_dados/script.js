//Number
var numero = 5;

console.log(numero);
console.log( typeof numero);

var float = 5.32;;

console.log(float);
console.log(typeof float);


//String
var nome = "Cristhian";
var sobrenome = "Silveira";

var nomeCompleto = nome + " " + sobrenome;

console.log(nome);
console.log(typeof nome);
console.log(nomeCompleto);
console.log(typeof nomeCompleto);

var textoComNumero = '523';

console.log(textoComNumero);
console.log(typeof textoComNumero);

console.log("Este número: " + "425");


//Boolean
var verdadeiro = true;

console.log(verdadeiro);
console.log(typeof verdadeiro);

var falso = false;

console.log(falso);
console.log(typeof falso);


//Null
var Nome2 = null;

console.log(Nome2);

Nome2 = "José";

console.log(Nome2);


//Undefined
var Sobrenome2;

console.log(Sobrenome2);


//Object
var obj = {
    nome: 'Cristhian',
    idade: 20,
    profissao: "Programador"
};

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é " + obj.nome);

obj.nome = "Pedro";

obj.graduacao = true;

console.log(obj);
console.log(obj.nome, obj.idade);


//Arrays
var arr = [5, "Cristhian", true, {teste: 1, teste: 2}];

console.log(arr);

var arr2 = [1, 2, 3, 4, 5];

console.log(arr2);

console.log(arr2[1]);
console.log(arr2[0]);
console.log(arr2[2]);

arr2[5] = 10; //adiciona um elemento ao array

console.log(arr2);