// FUNÇÃO SOMA
function soma(valor1, valor2) {
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = soma(10, 20)



// FUNÇÃO DE COTAÇÃO DO DÓLAR
function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 5.08;

var total = realParaDolar(valorReal, cotacao);

var texto1 = ("O valor em real é R$: " + valorReal + " o valor em dólar U$ é: " + total);

document.getElementById("dolar").innerHTML = texto1



// FUNÇÃO ALERTA BOTÃO
function alertaHello() {
    alert("Olá pessoal!")
}
// alertaHello();  = invocando função



// FUNÇÃO CONVERSÃO DE TEMPERATURA
function paraCelsius(valorFahrenheit) {
    return (5 / 9) * (valorFahrenheit - 32);
}
var x = paraCelsius(77);

var convertida = ("A temperatura é de " + x + " graus célsius.");

document.getElementById("temperatura").innerHTML = convertida
