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

function calcularJuros(valor, desconto){ 
    return (valor - (valor * (desconto / 100)))    
}
function calcularJuros1(valor, adicionarJuros){ 
    return (valor + (valor * (adicionarJuros / 100)))
}

const precoEdiqueta = 30
const formaDePagamento = 4

if(formaDePagamento === 1){ 
    console.log(calcularJuros(precoEdiqueta, 10))
} else if(formaDePagamento === 2){ 
    console.log(calcularJuros(precoEdiqueta, 15))
} else if(formaDePagamento === 3){ 
    console.log(`${precoEdiqueta}`)
} else if(formaDePagamento === 4){ 
    console.log((calcularJuros1(precoEdiqueta, 10)))
}