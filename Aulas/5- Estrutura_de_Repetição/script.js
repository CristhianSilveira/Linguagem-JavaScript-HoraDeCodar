
// Loop WHILE
var x = 0;

while(x < 5){
    console.log("Testando repetição " + x);

    //incrementador
    x++;
}
console.log(true);


var arr = ['teste', 'testando', 'a', 'b'];
var y = 0;

while(y <= 3){
    console.log(arr[y]);
    y++;
}
console.log(true);


var palavra = "Cristhian";
var i = 0;
while(i <= 8){
    console.log(palavra[i]);
    i++
}
console.log(true);


//Loop FOR
for(var z = 0; z < 10; z++){
    console.log("Repetindo for: " + z);

}
console.log(true);

var arr2 = [1,2,3,4];

for(var j = 0; j < arr2.length; j++){
    console.log(arr2[j]);
}
console.log(true);


// Switch
switch (new Date().getDay()) {
    case 0:
    dia = "Domingo";
    break;
    case 1:
    dia = "Segunda-Feira";
    break;
    case 2:
    dia = "Terça-Feira";
    break;
    case 3:
    dia = "Quarta-Feira";
    break;
    case 4:
    dia = "Quinta-Feira";
    break;
    case 5:
    dia = "Sexta-Feira";
    break;
    case 6:
    dia = "Sábado";
    default:
    dia = "Ansioso para o fim de semana";}
console.log(dia);

console.log(true);


// Loop Break e Continue

for(var c = 10; c > 0; c--){
    console.log(c);

    if(c == 5){
        break;
    }
}
console.log("Deu o break:");

console.log(true);


var m = 10;

while(m < 100){
    m += 10;

    if( m === 60){
        console.log("CONTINUE");
        continue;
    }
    console.log("Testando o continue "+ m)
}