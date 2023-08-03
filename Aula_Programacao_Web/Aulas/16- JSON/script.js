// OBJETO CARRO
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}


// Convertendo o objeto em texto
let texto = JSON.stringify(carro);
document.getElementById('area').innerHTML = texto;


// Convertendo texto em objeto
let obj = JSON.parse(texto);

//Pegando um valor deste objeto
console.log(obj.modelo);



//Buscar CEP com AJAX:
function buscarCEP() {
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function () {
        document.getElementById('texto').innerHTML = this.responseText;
        
        // Transformei o texto em obj
        let obj = JSON.parse(this.responseText);

        //Peguei os valores que eu queria
        let cep = obj.cep;
        let logradouro = obj.logradouro;
        let bairro = obj.bairro
        let cidade = obj.localidade;
        let estado = obj.uf;
        let ddd = obj.ddd;

        document.getElementById('texto').innerHTML = "CEP: " + cep + "<br>Logradouro: " + logradouro + "<br>Bairro: " + bairro + "<br> Cidade: " + cidade + "<br> Estado: " + estado +"<br>DDD: " + ddd;
    }
}