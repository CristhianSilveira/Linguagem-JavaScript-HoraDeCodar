// OPERADORES ARITMÉTICOS (+) (-) (*) (/) (++) (--)
console.log("Operador Aritmético:");

var valor1, valor2, total;

valor1 = 5;
valor2 = 2;


total = valor1 + valor2; //Soma
console.log(total);

total = valor1 - valor2; //Subtração
console.log(total);

total = valor1 * valor2; //Multiplicação
console.log(total);

total = valor1 / valor2; //Divisão
console.log(total);

++valor1; //Incremento
console.log(valor1);

--valor2; //Decremento
console.log(valor2);



// OPERADORES DE ATRIBUIÇÃO (=) (+=) (-=) (*=) (/=)
console.log("Operador de Atribuição:");

var valor3, valor4, total2;

valor3 = 5;
valor4 = 2;

valor3 += valor4; //valor3 virou 7
console.log(valor3);

valor3 -= valor4; //valor3 virou 5
console.log(valor3);

valor3 *= valor4; //valor3 virou 10
console.log(valor3);

valor3 /= valor4; //valor3 virou 5
console.log(valor3);



// OPERADORES DE COMPARAÇÃO (==) (===) (!=) (!==) (>) (<) (>=) (<=)
console.log("Operador de Comparação:");

var valor5, total3;

valor5 = 5;

total3 = (valor5 == 5); // (==) =  igual a
console.log(total3);

total3 = (valor5 === '5'); // (===) =  igual a e tipo igual
console.log(total3);

total3 = (valor5 != 4); // (!=) =  diferente de
console.log(total3);

total3 = (valor5 !== '4'); // (!==) =  diferente de e tipo diferente
console.log(total3);

total3 = (valor5 > 6); // (>) =  maior que
console.log(total3);

total3 = (valor5 < 7); // (<) =  menor que
console.log(total3);

total3 = (valor5 >= 9); // (>=) =  maior que ou igual a
console.log(total3);

total3 = (valor5 <= 5); // (<=) =  menor que ou igual a
console.log(total3);



// OPERADOR CONDICIONAL (TERNÁRIO) (?:)
console.log("Operador Ternário:");

var idade, eleitor;

idade = 18;
eleitor = (idade < 18) ? "Não Eleitor" : "Sim, eleitor"; // ? (se for verdade) : (senão)
console.log(eleitor);



// OPERADORES LÓGICOS (&&) (||) (!)
console.log("Operador Ternário:");

var idade2, resultado;

idade2 = 18;

resultado = (idade2 > 10 && idade2 < 17); // (&&) E
console.log(resultado);

resultado = (idade2 > 10 && idade2 > 17); // (&&) E
console.log(resultado);

resultado = (idade2 < 10 || idade2 == 17); // (||) OU
console.log(resultado);

resultado = (idade2 > 10 || idade2 == 17); // (||) OU
console.log(resultado);

resultado = !(idade2 > 10 ); // (!) NÃO
console.log(resultado);