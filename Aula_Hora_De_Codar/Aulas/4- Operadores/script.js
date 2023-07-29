
//Operador Aritmético
console.log("Operado Aritmético:");

var N1 = 10;
var N2 = 5;
var soma = N1 + N2;
console.log(soma); //Soma

var subtração = N1 - N2;
console.log(subtração); //Subtração

var multiplicacao = N1 * N2;
console.log(multiplicacao); //Multiplicação

var divisao = N1 / N2;
console.log(divisao); //Divisão

var modulo = N1 % N2;
console.log(modulo); //Resto da divisão

var exponencial = N1 ** N2;
console.log(exponencial); //Exponenciação

N1++;
var incrementa = N1;
console.log(incrementa); //Soma +1

N2--;
var decremento = N2;
console.log(decremento); //Subtrai -1

//Operador de Atribuição
console.log("Operador Atribuição:");

var N3 = 50;
 N3 += 10;
console.log(N3); //Soma

var N4 = 50;
 N4 -= 10;
console.log(N4); //Subtrai

var N5 = 50;
 N5 *= 10;
console.log(N5); //multiplica

var N6 = 50;
 N6 /= 10;
console.log(N6); //Divide

var N7 = 50;
 N7 %= 10;
console.log(N7); ///Resto da divisão

var N8 = 50;
 N8 **= 2;
console.log(N8); //Exponenciação

//Operador de Comparação
console.log("Operador Comparação:")
var N9 = 10
var N10 = 20

var verifica = N9 == N10;
console.log(verifica); //Igual a

var verifica = N9 === N10;
console.log(verifica); //Valor e tipo igual

var verifica = N9 != N10;
console.log(verifica); //Diferente

var verifica = N9 !== N10;
console.log(verifica); //Valor e tipo diferente

var verifica = N9 > N10;
console.log(verifica); //Maior que

var verifica = N9 < N10;
console.log(verifica); //Menor que

var verifica = N9 >= N10;
console.log(verifica); //Maior ou igual

var verifica = N9 <= N10;
console.log(verifica); //Menor ou igual

//Operador Lógico AND
console.log("Operador Lógico AND:")

var idade3 = 16;
var nome3 = "João";

if(nome3 == "João" && idade3 == 16) {
    console.log("O João pode entrar na aula hoje!");
}else{
    console.log("Este não é o João");
}
console.log(true) //Pra separar no console

if((1 == 1 && 3 > 2) && true){
    console.log("Passou");
}
console.log(true);

//Operador Lógico OR
console.log("Operador Lógico OR:")

var idade4 = 16;
var nome4 = "João";

if(nome4 == "João" || idade4 > 14) {
    console.log("O João pode entrar na aula de natação hoje!");
}else{
    console.log("Este não é o João");
}
console.log(true) //Pra separar no console

if((nome4 == "Pedro" || 30 > 20) && 10 == 10){
    console.log("Passou");
}else {
    console.log("Errado");
}
console.log(true) //Pra separar no console

//Operador Lógico NOT:
console.log("Operador Lógico NOT: ");

var nome5 = "Cristhian";
var idade5 = 20;

if(!(nome5 == "João")){
    console.log("Errou");
}else {
    console.log("Acertou");
}
console.log(true) //Pra separar no console

//Operador Condicional IF
console.log("Operador IF:")

var idade = 19;

if(idade > 18) {
    console.log("Pode fazer a carteira de habilitação!");
}
console.log(true) //Pra separar no console

var maior = 18;

if(maior > 17) {
    console.log("É de maior!");
}
console.log(true) //Pra separar no console

//Operador Condicional Else
console.log("Operador Else:")

var nome = "Cristhian";

if(nome == "Pedro") {
    console.log("O nome dele é Pedro");
} else {
    console.log("Ele possuí outro nome!");
}
console.log(true) //Pra separar no console


var idade2 = 20

if(idade2 < 18){
    console.log("Pode tirar a carteira");
} else {
    console.log("De menor!!!");
}
console.log(true) //Pra separar no console

//Operador Condicional Else IF
console.log("Operador Else IF:")

var nome2 = "Cristhian";

if(nome2 == "Pedro") {
    console.log("O nome dele é Pedro");
} else if(nome2 == "Cristhian") {
    console.log("O nome é Cristhian");
} else {
    console.log("Ele possuí outro nome!");
}
console.log(true) //Pra separar no console

var verifica2 = 18;
verifica2--;

if(verifica2 > 18){
    console.log("Maior que 18");
}else if(verifica2 < 18){
    console.log("Menor que 18");
}else{
    console.log("Igual a 18");
}