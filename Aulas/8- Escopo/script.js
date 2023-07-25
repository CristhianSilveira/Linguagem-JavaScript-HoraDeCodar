var x = 1; //Escopo Global

var y = 3; //Escopo Global
console.log(x,y)



function teste() {
    
    var z = 0; //Escopo Local

    console.log(z);
    console.log(x);
}
teste();


function testando() {
    var z = 5; //Escopo Local

    console.log(z);
}
testando()


if(true) {
    var p = 1; //Escopo Global
}
console.log(p);