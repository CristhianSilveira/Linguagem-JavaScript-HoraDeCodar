// Exercício 1: Olá, Mundo!:
console.log("Olá, Mundo!");



// Exercício 2: Conversão de tipos:
const converta = "1234";
const convertida = Number(converta);
console.log(convertida);

console.log(typeof convertida);


// Exercício 3: Manipulação de strings:
const manipulaString = "JavaScript é incrível"
const numeroDeCaracteres = manipulaString.length;
const numeroDePalavras = manipulaString.split(" ").length;
console.log(numeroDeCaracteres);
console.log(numeroDePalavras);



// Exercício 4: Loops e Arrays:
const meuArray = ["Cristhian", "Paulo", "José", "Pedro", "Carlos"]

for (let i = 0; i  < meuArray.length; i++){
    console.log("O nome impresso foi: " + meuArray[i]);
}



// Exercício 5: Funções, Strings e Math:
function converterHorario(horario24) {
    const hora = horario24.split(":")[0];
    const minuto = horario24.split(":")[1];


    const hora12 = hora % 12 || 12;

    let periodo = "AM";

    if (hora > 12) {
        periodo = "PM";
    }

    console.log(`${hora12}:${minuto} ${periodo}`);
}
converterHorario("15:16");
converterHorario("09:46");
converterHorario("21:12");