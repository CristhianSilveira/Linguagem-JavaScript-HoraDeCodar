// Loop FOR no DOM
var lista = ['Laranja', 'Maçã', 'Pera', 'Jaca', 'Limão'] //Criando uma lista



var listaUl = document.createElement('ul');//Criando o elemento UL(lista)



var body = document.getElementsByTagName('body');//Criando uma variável para armazenar o body

//console.log(body[0]);



body[0].appendChild(listaUl);//body na linha 0 vai ter um filho UL



var listaNoBody = document.getElementsByTagName('ul');//Criando uma variável para selecionar o UL



console.log(listaNoBody[0]); //Exibindo o ul no console



for( var i = 0; i < lista.length; i++){
    
    var liFor = document.createElement('li'); //Criando um li de acordo com o tamanho da lista

    var textoLi = document.createTextNode(lista[i]); //Criando um texto na página HTML com os elementos da lista

    liFor.appendChild(textoLi); // liFor(o li) recebe seu filho textoLi(os elementos da lista no HTML)

    listaNoBody[0].appendChild(liFor); //a UL recebe seu filho liFor  (o li)
}

