// function calcularIMC(peso, altura){ 
//     return peso / Math.pow(altura, 2)
// }
// function classificarIMC(imc){ 
//     if(imc < 18.5){ 
//         return'Abaixo do Peso'
//     } else if(imc >= 18.5 && imc < 25){ 
//         return'Peso Normal'
//     } else if(imc >= 25 && imc < 30){ 
//         return'Acima do Peso'
//     } else if(imc >= 30 && imc < 40){ 
//         return'Obeso'
//     } else { 
//         return'Obesidade grave'
//     }
// }

// //FUNCTION MAIN
// (function() { 
//     const peso = 75
//     const altura = 1.90
//     const imc = calcularIMC(peso, altura)
//     console.log(`Seu peso ${peso}, sua altura ${altura}`)
//     console.log(classificarIMC(imc))
// })() 
// //FUNCAO SEM CHAMAR NO FINAL E SEM NOME, VAI SER CHAMADA NO FINAL DELA SOMENTE UMA VEZ
// //INVOCADA IMEDIATAMENTE

// function calcularJuros(valor, desconto){ 
//     return (valor - (valor * (desconto / 100)))    
// }
// function calcularJuros1(valor, adicionarJuros){ 
//     return (valor + (valor * (adicionarJuros / 100)))
// }

// const precoEdiqueta = 30
// const formaDePagamento = 4

// if(formaDePagamento === 1){ 
//     console.log(calcularJuros(precoEdiqueta, 10))
// } else if(formaDePagamento === 2){ 
//     console.log(calcularJuros(precoEdiqueta, 15))
// } else if(formaDePagamento === 3){ 
//     console.log(`${precoEdiqueta}`)
// } else if(formaDePagamento === 4){ 
//     console.log((calcularJuros1(precoEdiqueta, 10)))
// }

// const pessoa = { 
//     nome: 'Pedro S. Coelho', 
//     idade: 19,

//     descrever: function(){ 
//         console.log(`Meu nome e ${this.nome}, tenho ${this.idade} anos`)
//         // THIS SERVE PARA PUXAR OS ITENS DENTRO DO OBJETO 
//     }
// }

// pessoa.descrever = function() { 
//     console.log(`Meu nome e ${this.nome}`)
// }
// pessoa.descrever()

// const atributo = 'idade'
// console.log(`Tenho ${pessoa[atributo]} anos`)
// pessoa['nome'] = 'teste'
// pessoa.nome = 'teste'

// // INSTANCIA DE UMA PESSOA, OCORRENCIA DE UMA COISA 
// const pessoa = { 
//     nome: 'Pedro S. Coelho', 
//     idade: 19,

//     descrever: function(){ 
//         console.log(`Meu nome e ${this.nome}, tenho ${this.idade} anos`)
//         // THIS SERVE PARA PUXAR OS ITENS DENTRO DO OBJETO 
//     }
// }

// DEFINICAO DO QUE DEVERIA SER 

// class Pessoa { 
//     nome; 
//     idade;

//     descrever(){ 
//         console.log(`Meu nome e ${this.nome}, tenho ${this.idade} anos`)
//     }
// }

// //INSTACIA DE PESSOA 
// const pedro = new Pessoa()
// pedro.nome = 'Pedro S. Coelho'
// pedro.idade = 19
// pedro.altura = 1.80
// pedro.peso = 30

// const renan = new Pessoa()
// renan.nome = 'Renan J'
// renan.idade = 20
// renan.peso = 50
// renan.altura = 1.60

// // pedro.descrever()
// // renan.descrever() 

// function calcularIMC(peso, altura){ 
//     return peso / Math.pow(altura, 2)
// }
// function classificarIMC(imc){ 
//     if(imc < 18.5){ 
//         return'Abaixo do Peso'
//     } else if(imc >= 18.5 && imc < 25){ 
//         return'Peso Normal'
//     } else if(imc >= 25 && imc < 30){ 
//         return'Acima do Peso'
//     } else if(imc >= 30 && imc < 40){ 
//         return'Obeso'
//     } else { 
//         return'Obesidade grave'
//     }
// }

// //FUNCTION MAIN
// (function() { 
//     const peso = pedro.peso
//     const altura = pedro.altura
//     const imc = calcularIMC(peso, altura)
//     console.log(`Pedro tem ${peso} kgs, sua altura ${altura} metros`)
//     console.log(classificarIMC(imc))
// })() 

// function pesar() { 
//     const peso = renan.peso
//     const altura = renan.altura
//     const imc = calcularIMC(peso, altura)
//     console.log(`Renan tem ${peso} kgs, sua altura ${altura} metros`)
//     console.log(classificarIMC(imc))
// } 
//INSTACIA DE PESSOA 
// const pedro = new Pessoa()
// pedro.nome = 'Pedro S. Coelho'
// pedro.idade = 19
// pedro.altura = 1.80
// pedro.peso = 30

// const renan = new Pessoa()
// renan.nome = 'Renan J'
// renan.idade = 20
// renan.peso = 50
// renan.altura = 1.60

// pesar()

class Pessoa { 
    nome; 
    idade;
    
    // O QUE ACONTECE QUANDO UMA PESSOA E INSTANCIADA, SEMPRE QUE TIVER UM NEW PESSOA 
    // O CONSTRUCTOR PASSA O PARAMETRO PARA DENTRO DELA
    constructor(nome, idade){ 
        this.nome = nome
        this.idade = idade
        this.anoDeNasc = 2022 - idade
    }

    descrever(){ 
        console.log(`Meu nome e ${this.nome}, tenho ${this.idade} anos, nasceu no ano ${this.anoDeNasc}`)
    }
}

function compararPessoas(p1, p2){ 
    if(p1.idade > p2.idade){ 
        console.log(`${p1.nome} e mais velho que ${p2.nome}`)
    } else if (p1.idade < p2.idade){ 
        console.log(`${p2.nome} e mais velho que ${p1.nome}`)
    } else { 
        console.log(`${p1} tem a mesma idade que ${p2}`)
    }
}

const pedro = new Pessoa('Pedro S. Coelho', 19)
const vitor = new Pessoa('Vitor nao sei oq', 30)

compararPessoas(pedro, vitor)
pedro.descrever()
vitor.descrever()