
//Criando uma função
function primeiraFuncao(){
    console.log("Hello World das funções");
}

// Chamando/Invocando uma função
primeiraFuncao();
primeiraFuncao();
primeiraFuncao();
primeiraFuncao();
primeiraFuncao();



//Colocando parâmetro
function dizerNome(nome){

    console.log("O nome é: " + nome);
}

dizerNome("Cristhian");
dizerNome("Matheus");
dizerNome("Pedro");

//Colocando variável como parâmetro
var nomeDoBancoDeDados = "João";

dizerNome(nomeDoBancoDeDados);



// Colocando 2 parâmetros
function soma(a,b){
    var soma = a + b;
    return soma; //Ou return a + b; //return = Retorna um dado de volta
}

var somaUm = soma(2,5);
console.log(somaUm);

var somaDois = soma(5,5);
console.log(somaDois)



// arrow function
const myArrowFunction = (a, b) => {
    return a + b;
}
console.log(myArrowFunction(3, 5));