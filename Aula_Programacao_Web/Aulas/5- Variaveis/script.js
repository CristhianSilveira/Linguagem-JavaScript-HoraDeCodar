// var = Pode ser redeclarada
console.log("Var:")

var pote = "Bombom";
var pote = "Bala";
console.log(pote);


var a,b,c;
a = 2;
b = 3;
c = a + b;
console.log(c);


var nome, sobrenome, nomeCompleto,  idade, soma;

nome = "Cristhian";
sobrenome = "Silveira";
idade = 20;

nomeCompleto = nome + " " + sobrenome; // Concatenação
soma = idade + 10 + " " + "anos em 2033";

document.getElementById("texto").innerHTML = nomeCompleto;
document.getElementById("texto2").innerHTML = soma;



// let = Não pode ser redeclarada

/*
let pessoa = "Cristhian";
let pessoa = "Marcos";
*/



// const



// Escopo Global e Local/Bloco
console.log("Escopo:")


// var
console.log("Escopo var:")
var x = 10 // Global

{
    var x = 2 // Local/Bloco
}
console.log(x);


// let
console.log("Escopo let:")
let y = 10 // Global

{
    let y = 2 // Local/Bloco
}
console.log(y);


// const
console.log("Escopo const:")
const z = 10 // Global

{
    const z = 2 // Local/Bloco
}
console.log(z);