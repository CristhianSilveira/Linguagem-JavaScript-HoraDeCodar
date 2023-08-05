
// ONLOAD
//(Muito usado quando o script está no topo do HTML), normalmente é executada quando todo o HTML é carregado
window.onload = function() {
    console.log("Evento Onload:")
    console.log("Carregou o DOM");

    var title2 = document.querySelector('#title');
    console.log(title2);
}
console.log("Carregou o JS");



// CLICK
// 1- Inserir click
var btn = document.querySelector('#btn');

btn.addEventListener("click", function() {

    console.log("Clicou");

    this.style.color = "red";
});

// 2- Click afetando outro elementos:
var clica = document.querySelector('#clica');

clica.addEventListener("click", function(){
    
    var some = document.querySelector("#some");
    some.style.display = "none";
});

// 3- Double click:
var double = document.querySelector('#double');

double.addEventListener("dblclick", function(){
    console.log("Click duplo");
});



// MOUSEOVER E MOUSEOUT

// 1- Mouseover
var mudando = document.querySelector('#mudando');

mudando.addEventListener("mouseover", function(){
    this.style.backgroundColor = "yellow";
});

// 2- Mouseout
mudando.addEventListener("mouseout", function(){
    this.style.backgroundColor = 'white';
});

// 3- Afetar outro elemento com mouseover e mouseout
var passe = document.querySelector("#passe");

passe.addEventListener("mouseover", function() {
    var hide = document.querySelector("#hide");

    hide.style.display = "block";
});
var passe = document.querySelector("#passe");

passe.addEventListener("mouseout", function() {
    var hide = document.querySelector("#hide");

    hide.style.display = "none";
});



// KEYDOWN E KEYUP

// 1- Keydown
document.addEventListener("keydown", function(event) {
    if(event.key === "Enter"){
        console.log("Apertou o Enter");
    }
});

// 2- Keyup
document.addEventListener("keyup", function(e) {
    if(e.key === "Enter"){
        console.log("Soltou o Enter");
    }
});