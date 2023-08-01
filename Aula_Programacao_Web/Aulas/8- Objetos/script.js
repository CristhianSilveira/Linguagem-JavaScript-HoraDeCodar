const carro = {
    marca: "Ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function () { alert('BIIIIIIIIIIIIIII') },
    completo: function () {
        return "A marca é " + this.marca + " e o modelo é: " + this.modelo;
    }
};
// OU const carro = {marca: "ford", modelo: "ka", ano: 2015, placa: "ABC-1234" };

console.log(carro);
console.log(carro.ano);
console.log(carro.placa);
console.log(carro["marca"]);

carro.buzina();

console.log(carro.completo());