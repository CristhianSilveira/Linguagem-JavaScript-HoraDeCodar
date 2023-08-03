
// Comando base para pegar a data
let data = new Date();
console.log(data);



// Pegar o ano com 4 dígitos:
console.log("Ano:");

let ano = data.getFullYear();
console.log(ano);



// Pegar o mês: ( 0(janeiro) até 11(dezembro))
console.log("Mês em número:")

let mes = data.getMonth() + 1;
console.log(mes);



// Mostrar mês escrito:
console.log("Mês escrito:");

const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);



//Pegar o dia:
console.log("Dia:");

let diaMes = data.getDate();
console.log(diaMes);



//Pegar o dia da semana: (0(domingo) até 6(sábado))
console.log("Dia da semana:");

let diaSemana = data.getDay() + 1;
console.log(diaSemana);



//Mostrar o dia da semana escrito:
console.log("Dia da semana Escrita:");

const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let diaSemanaEscrita = diasDaSemana[data.getDay()];
console.log(diaSemanaEscrita);



//Pegar Hora: (0 até 23)
console.log("Hora:");

let hora = data.getHours();
console.log(hora);



//Pegar os minutos: (0 até 59)
console.log("Minuto:");

let minutos = data.getMinutes();
console.log(minutos);



//Pegar os segundos: (0 até 59)
console.log("Segundos:");

let segundos = data.getSeconds();
console.log(segundos);


//Pegar a data no padrão brasileiro - dia/mês/ano:
console.log("Data Brasileira:");

let dataBR = data.toLocaleString('pt-BR');
console.log(dataBR);