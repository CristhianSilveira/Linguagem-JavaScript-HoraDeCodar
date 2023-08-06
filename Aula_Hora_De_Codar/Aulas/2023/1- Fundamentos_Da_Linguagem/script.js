console.log("Hello world!"); /* Exibe no console do navegador: basta acessar inspecionar e depois ir na aba console */

// -> Indica Comentários
/*
-> Indica várias linhas de Comentários
*/



/* VARIÁVEIS:
var nome = "valor"; */
console.log("VARIÁVEIS:");

// 1- var
var minhaVariavel = 10;
console.log(minhaVariavel);

// 2- let
console.log("let:");
let x = 15;
{
    let x = 30;
console.log(x); // -> Variáveis ​​definidas com let têm escopo de bloco
}
/* let x = 30; -> Não pode ser Redeclarada.
 x = 30; -> É um valor que pode ser alterado ao longo do programa */
console.log(x);

// 3- const -> Sempre declare com const quando souber que o valor não deve ser alterado.
console.log("const:");
const y = 5;
{
    const y = 20;
console.log(y); // -> Variáveis ​​definidas com const têm escopo de bloco
}
/* const y = 20; -> Não pode ser Redeclarada.
 y = 20; -> O valor não muda ao longo do programa */
console.log(y);



// TIPOS DE DADOS:
console.log("TIPOS DE DADOS:");

// 1- Number -> É o tipo para números
console.log("Number:");
var meuNumero = 10;
console.log(meuNumero);

// 2- String -> Sempre entre aspas
console.log("String:");
var minhaString = "Teste"
console.log(minhaString);

// 3- Boolean -> true ou false
console.log("Boolean:");
var minhaBol = true;
console.log(minhaBol);

// 4- Objeto -> Sempre escrita com nome:valor
console.log("Objeto:");
var meuObjeto = {PrimeiroNome: "João",Sobrenome: "Silva", idade: 50, CorOlho: "Azul"};
console.log(meuObjeto)

// 5- Array -> É considerado uma lista
console.log("Array:");
var meuArray = ["arroz", "feijão", "macarrão", "leite"];
console.log(meuArray)    

// 6- Null -> Variável vazia
console.log("Null:");
var meuNull = null;
console.log(meuNull)

// 7- Undefined -> Variável criada sem valor
console.log("Undefined:");
var meuUndefined = undefined;
console.log(meuUndefined)

// 8- Typeof -> Retorna o tipo da variável
console.log("Typeof:");
console.log(typeof meuNumero);
console.log(typeof minhaString);
console.log(typeof minhaBol);
console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof meuNull);
console.log(typeof meuUndefined);



// OPERADORES ARITMÉTICOS: