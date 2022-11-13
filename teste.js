function calcularIMC(peso, altura){ 
    return peso / Math.pow(altura, 2)
}
function classificarIMC(imc){ 
    if(imc < 18.5){ 
        return'Abaixo do Peso'
    } else if(imc >= 18.5 && imc < 25){ 
        return'Peso Normal'
    } else if(imc >= 25 && imc < 30){ 
        return'Acima do Peso'
    } else if(imc >= 30 && imc < 40){ 
        return'Obeso'
    } else { 
        return'Obesidade grave'
    }
}

function main() { 
    const peso = 75
    const altura = 1.90
    const imc = calcularIMC(peso, altura)
    console.log(`Seu peso ${peso}, sua altura ${altura}`)
    console.log(classificarIMC(imc))
}

    main()