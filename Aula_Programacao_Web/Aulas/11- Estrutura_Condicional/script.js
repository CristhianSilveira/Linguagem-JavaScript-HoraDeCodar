// ESTRUTURA CONDICIONAL:

// 1- IF(se) e ELSE(senão):
console.log("IF e ELSE:");

var interruptor = "on";

if (interruptor == "on") {
    console.log('A lampada está ligada');
} else {
    console.log('A lampada está desligada');
}


//2- ELSE IF:
console.log("ELSE IF:");

var hora = new Date().getHours();

if (hora < 12) {
    console.log('Bom dia');
} else if (hora < 18) {
    console.log('Boa Tarde');
} else {
    console.log('Boa noite');
}