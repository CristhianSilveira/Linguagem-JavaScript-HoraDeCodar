// EVENTOS DE CLICK:
// ONCLICK
function eventoClick() {
    alert("Acionou um evento de clique!");
    document.body.style.backgroundColor = 'gray';
}

// DBLCLICK
function eventoDblClick() {
    alert('Evento de clique duplo');
}



// EVENTOS DE MOUSE:
// ONMOUSEOVER
function viraVermelho() {
    var div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

//ONMOUSEOUT
function viraAzul() {
    var div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

//ONMOUSEMOVE
function adicionaTexto() {
    let p = document.getElementById("texto");
    p.append('O mouse moveu <br>');
}



// EVENTOS INPUT:
//ONFOCUS
function campoFocado() {
    var input = document.getElementById("campoTexto");
    input.style.backgroundColor = "black";
    input.style.border = "10px solid red";
}

//ONCHANGE
function mudou() {
    alert("Alterou o valor do input")
}



// EVENTO TECLADO:
//onkeydown
function teclaPressionada() {
    console.log('Apertou a tecla');
}

//onkeypress
function teclaPressionadaSolta() {
    console.log('Apertou a tecla e soltou');
}

//onkeyup
function teclaSolta() {
    console.log('Soltou a tecla');
}
