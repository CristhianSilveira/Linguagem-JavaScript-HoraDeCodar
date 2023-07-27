// Introdução
function exibir(num){
    console.log("a operação resultou em: " + num);
}

function soma(a, b, callback){
    var op = a + b;
    callback(op); // Chama o parâmetro 'callback' dentro da função 'soma', o parâmetro 'callback' vai receber a função 'exibir', logo, o valor de 'callback()' será o mesmo valor de 'exibir()', só trocando de nome.
}

function multiplica(a, b, cb){
    var op = a * b;
    cb(op);
}
soma(2, 2, exibir);
multiplica(2, 4, exibir);



// clearTimeout [Da o fim para o setTimeout]
console.log("ClearTimeout:");

var x = 0

var myTimer = setTimeout(function(){
    console.log("O x é 0");
}, 1000);

x = 5;

if (x > 0){
    clearTimeout(myTimer);
    console.log("O x passou de 0");
}




// clearInterval [Da o fim para o setInterval]
var myInterval = setInterval(function() {
    console.log("Imprimido interval");
}, 500);

setTimeout(function(){
    console.log("Não precisamos mais repetir!");
    clearInterval(myInterval);
}, 1500);



// setTimeout

setTimeout(function() {
    console.log("Testando o setTimeout");
}, 2000);



// setInterval
setInterval(function() {
    console.log("Tetando setInterval");
}, 3000);