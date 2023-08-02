// ESTRUTURA DE REPETIÇÃO:

//1- FOR(para):
console.log("FOR:");
var numInicial = 1

for (let i = numInicial; i <= 10; i++){
    console.log(i);
}


//2- WHILE(enquanto):
console.log("WHILE:");

var i = 1;
var conta = 10;

while (i <= conta) {
    console.log("A posição é: " + i)
    i++
}


//3- Switch(escolha):
console.log("Switch:");

var letra = "c";

switch (letra) {
    case "a":
        console.log("Letra A")
        break;
    case "b":
        console.log("Letra B")
        break;
    case "c":
        console.log("Letra C")
        break;
    default:
        console.log("Outra Letra")
};