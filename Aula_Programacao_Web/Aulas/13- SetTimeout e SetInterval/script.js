// SetTimeout (function, tempo em milissegundos)
// -> Executa uma função, depois de esperar um número especificado de milissegundos
function ativarContagem() {
    document.getElementById("tempo").innerHTML = "Começou a contar!";
    tempo = setTimeout(function () {
        document.getElementById("tempo").innerHTML = "Executou o setTimeout";
    }, 5000);
}

function pararContagem() {
    clearTimeout(tempo);
    document.getElementById("tempo").innerHTML = "Parou a contagem";
}



// SetInterval(function, milissegundos)
// -> É o mesmo que setTimeout(), mas repete a execução da função continuamente

function ativarContagem2() {
    tempo2 = setInterval(function () {
    var cronometro = document.getElementById("tempo2").innerHTML;
    var soma = parseInt(cronometro) + 1;
    document.getElementById("tempo2").innerHTML = soma;
    }, 1000);
}

function pararContagem2() {
    clearInterval(tempo2);
}