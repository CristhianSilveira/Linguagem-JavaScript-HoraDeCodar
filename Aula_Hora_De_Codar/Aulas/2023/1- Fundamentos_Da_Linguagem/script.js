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

// 9- Convertendo string em número:
const meuNumero2 = "123";
const meuNumeroConvertido2= Number(meuNumero2);
console.log(meuNumeroConvertido2)
console.log(typeof meuNumeroConvertido2)

// 10- Convertendo número em string:
const meuNumero3 = 123;
const meuNumeroConvertido3 = String(meuNumero3);
console.log(meuNumeroConvertido3)
console.log(typeof meuNumeroConvertido3)



// OPERADORES ARITMÉTICOS:
console.log("OPERADORES ARITMÉTICOS:");
var opUm = 10;
var opDois = 2;

// 1- Adição (+)
console.log(opUm + opDois);

// 2- Subtração (-)
console.log(opUm - opDois);

// 3- Multiplicação (*)
console.log(opUm * opDois);

// 4- Divisão (/)
console.log(opUm / opDois);

// 5-  Exponenciação (**)
console.log(opUm ** opDois);

// 6- Módulo (%) -> Resto da divisão
console.log(opUm % opDois);

// 7- Incremento (++)
var incremento = 10;
console.log(++incremento);

// 8- Decremento (--)
var decremento = 10;
console.log(--decremento);



// OPERADORES DE COMPARAÇÃO: Retorna true ou false
console.log("OPERADORES DE COMPARAÇÃO:");

// 1- Igual a (==)
console.log(5 == 5);
console.log("5" == 5);

// 2- Valor Igual ou tipo igual (===)
console.log(5 === 5);
console.log("5" === 5);

// 3- Diferente de (!=)
console.log(5 != 5);

// 4- Valor diferente ou tipo diferente (!==)
console.log(5 !== 5);
console.log("5" !== 5);

// 5- Maior que (>)
console.log(5 > 6);

// 6- Menor que (<)
console.log(5 < 6);

// 7- Maior ou igual a (>=)
console.log(5 >= 6);

// 8- Menor ou igual a (<=)
console.log(5 <= 6);

// 9- Operador Ternário -> (expressão ?verdade :falso)
console.log(5 == 6 ?"Igual" :"Diferente");
console.log(5 == 5 ? "Igual" : "Diferente");



// OPERADORES LÓGICO: Retorna true ou false
console.log("OPERADORES LÓGICO:");

// 1- AND (&&)
console.log(10 > 5 && 20 > 5);
console.log(10 > 5 && 20 < 5);
console.log(10 < 5 && 20 < 5);

// 2- OR (||)
console.log(10 > 5 || 20 > 5);
console.log(10 > 5 || 20 < 5);
console.log(10 < 5 || 20 < 5);

// 3- NOT (!)
console.log(!(10 > 5 || 20 > 5));
console.log(!(10 > 5 || 20 < 5));
console.log(!(10 < 5 || 20 < 5));



// ESTRUTURA DE CONDIÇÃO:
console.log("ESTRUTURA DE CONDIÇÃO:");
const idade = 18;

// 1- if (se): if(condição) -> { bloco de instrução }
if (idade > 17) {
    console.log("Adulto");
}

/* 2- if (se) else(senão) -> if (condição)  { bloco de instrução } else  { bloco de instrução } */
if (idade < 17) {
    console.log("Adulto");
}else {
    console.log("Criança");
}

/* 3- if (se) else if(senão se) else(senão) -> if (condição1)  { executa, se a condição 1 for verdadeira }else if (condição2)  { executa, se a condição1 for falsa e a condição2 for verdadeira } else {executa, se a condição1 e condição2 forem falsas } */
if (idade < 13) {
    console.log("Criança");
}else if (idade < 20){
    console.log("Adolescente");
}else {
    console.log("Adulto");
}



// ESTRUTURA DE REPETIÇÃO:
console.log("ESTRUTURA DE REPETIÇÃO:");

// 1- While -> while (condição) { Bloco de execução }
let k = 0;
while (k < 5) {
    console.log("O valor de k: " + k);
    k++
}

// 2- do while -> do { Bloco de execução; incremento } while(condição)
let j = 0;
do {
    console.log("O valor de j é: " + j);
    j++
} while (j < 5);

// 2- for -> for (contador; condição; incremento) { Bloco de execução }
// Mais usado
for (let i = 0; i < 5; i++){
    console.log("O valor de i é: " + i); //concatenação
}

// 3- switch
const fruta = "Maçã"

switch (fruta) {
    case "Banana":
        console.log("Banana é a fruta!");
        break;
    case "Maçã":
        console.log("Maçã é a fruta!");
        break;
    case "Uva":
        console.log("Uva é a fruta!");
        break;
    default:
        console.log("Fruta não encontrada!");
}



// FUNÇÕES -> function nome() { corpo da função }
console.log("FUNÇÕES:");
function cumprimentar() {
    console.log("Olá!");
}
cumprimentar(); // Invocação da função -> nome()

/* 1- Função com argumento -> function nome(arg1, arg2) { corpo da função } */
function cumprimentar2(nome) {
    console.log("Olá! " + nome);
}
cumprimentar2("Cristhian");

// 2- hoisting = içamento -> invocando a função antes de cria-lá
testeHoisting();

function testeHoisting() {
    console.log("Deu certo!");
}

// 3- arrow function -> variável = () => { corpo da função }
const testeArrow = () => console.log("Isto também é uma função.");
testeArrow();



// MÉTODOS ARRAY:
console.log("MÉTODOS ARRAY:");
const numeros = [1, 2, 3, 4, 5];

// 1- Acessando elementos do array por índice:
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

// 2- Adicionando elemento no último índice do array -> push()
numeros.push(6);
console.log(numeros);

// 3- Removendo o último elemento do array -> pop()
numeros.pop();
console.log(numeros);

// 4- Adicionando elemento no primeiro índice do array -> unshift()
numeros.unshift(0);
console.log(numeros);

// 5- Removendo o primeiro elemento do array -> shift()
numeros.shift();
console.log(numeros);

/* 6- Adicionar novos itens a um array -> splice(x1, x2, x3,) OBS (O primeiro parâmetro (x1) define a posição onde novos elementos devem ser adicionados. O segundo parâmetro (x2) define quantos elementos devem ser removidos) */
numeros.splice(2, 0, 100)
console.log(numeros);

/* 7- Procura um array por um valor de elemento e retorna sua posição -> indexOf() */
console.log(numeros.indexOf(2));

// 8- Transforma um array em uma string -> join()
var texto = numeros.join(" -> ");
console.log(texto);

// 9-  Classifica uma matriz em ordem alfabética -> sort()
const nomes = ["Bruna", "Daniel", "Ana", "Carlos"];
nomes.sort();
console.log(nomes);

// 10- Comprimento de um array -> length
console.log(numeros.length);

// 11- Acessando o último elemento da matriz -> nome[nome.length -1]
console.log(numeros[numeros.length - 1]);



// MÉTODOS STRING:
console.log("MÉTODOS STRING:");
const minhaStringNova = "Olá, Mundo!";

// 1- Concatenação -> +
const minhaString3 = minhaStringNova + " Como você esta?";
console.log(minhaString3);

// 2- Interpolação -> `${}`
const minhaString4 = `${minhaStringNova} Como você está?`;
console.log(minhaString4)

// 3- Converter String para letras maiúsculas -> toUpperCase()
console.log(minhaStringNova.toUpperCase());

// 4-  Converter String para letras minúsculas -> toLowerCase()
console.log(minhaStringNova.toLowerCase());

// 5- Comprimento de uma string -> length
console.log(minhaStringNova.length);

/* 6- Retorna o índice da primeira ocorrência de uma string -> indexOf() OBS: começa em 0 e conta os espaços*/
console.log(minhaStringNova.indexOf("Mundo"));

/* 7- Extrair uma parte de uma string -> slice(x1, x2) OBS (O primeiro parâmetro (x1) define a posição inicial. O segundo parâmetro (x2) define a posição final.*/
console.log(minhaStringNova.slice(5, 11))

/* 8- Substituir uma string  por outra string -> replace(x1, x2)  OBS (O primeiro parâmetro (x1) define a string a ser substituída. O segundo parâmetro (x2) define a nova string. */
console.log(minhaStringNova.replace("Mundo", "JavaScript"));

// 9- Remove os espaços em branco em uma string -> trim()
console.log(minhaStringNova.trim());

// 10- Retorna o índice da última ocorrência de uma string -> lastIndexOf()
console.log(minhaStringNova.lastIndexOf("o"));


// DATA E HORA:
console.log("DATA E HORA:");

// 1- Data e Hora Ano atual do sistema -> new Date()
const data = new Date();
console.log(data);

// 2- Ano Atual do Sistema -> getFullYear()
console.log(data.getFullYear());

// 3- Mês Atual do Sistema -> getMonth() OBS(0 é janeiro 11 é dezembro)
console.log(data.getMonth());
// console.log(data.getMonth() + 1); = resolve o problema

// 4- Dia Atual do Sistema -> getDate()
console.log(data.getDate());

// 5- Dia da semana  do Sistema -> getDay() OBS(0 é domingo 06 é sábado)
console.log(data.getDay());
// console.log(data.getDay() + 1) = resolve o problema

// 6- Hora Atual do Sistema -> getHours()
console.log(data.getHours());

// 7- Minuto Atual do Sistema -> getMinutes()
console.log(data.getMinutes());

// 8- Segundo Atual do Sistema -> getSeconds()
console.log(data.getSeconds());

// 9- Data Brasileira -> toLocaleString('pt-br)
console.log(data.toLocaleString('pt-BR'));