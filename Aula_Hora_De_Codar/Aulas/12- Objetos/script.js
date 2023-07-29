 let pessoa = {
    nome: "Cristhian",
    idade: 20,
    falar: function() {
        console.log("Olá, tudo bem?");
    },
    soma: function(a, b) {
        return a + b;
    },
    dizerNome: function() {
        console.log("O meu nome é " + this.nome);
    },
    aniversario: function(){
        this.idade += 1;
    },
    saudacao: function(){
        return 'Sr. ' + this.nome;
    }
 };

 console.log(pessoa.nome);
 console.log(pessoa.idade);

 pessoa.falar();
 pessoa.dizerNome();
 pessoa.aniversario();

 var soma = pessoa.soma(2,2);
 console.log(soma);

 console.log(pessoa.idade);

 var sdc = pessoa.saudacao();
 console.log("Olá, " + sdc)