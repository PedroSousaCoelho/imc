const form = document.querySelector('#form')
const res = document.querySelector('#res')

form.addEventListener('submit', (e) =>  { 
    e.preventDefault()
    
    const i_altura = document.querySelector('#altura')
    const i_peso = document.querySelector('#peso')
    
    const peso = Number(i_peso.value)
    const altura = Number(i_altura.value)

    if(!peso){ 
        setRes('Peso invalido', false)
        return
    }
    else if(!altura){ 
        setRes('Altura Invalida', false)
        return
    }
    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC e ${imc} (${nivelImc})`
    setRes(msg, true)
}) 

function getImc(peso, altura){ 
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function setRes(msg, isValid) { 
    res.innerHTML = ''
    const p = criaP() 
    p.innerHTML = msg
    res.appendChild(p) 

    if (isValid) {
        p.classList.add('p-res')
    } else{ 
        p.classList.add('n-res')
    }
} 
function criaP () {  
    const p = document.createElement('p')
    return p 
} 

function getNivelImc(imc){ 
    const nivel = ['Abaixo do peso', 'Peso normal', 'SobrePeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'] 

    if(imc >= 39.9){ 
        return nivel[5]
    }

    if (imc >= 34.9){ 
        return nivel[4]
    }

    if (imc >= 29.9){ 
        return nivel[3]
    }

    if (imc >= 24.9){ 
        return nivel[2]
    }

    if (imc >= 18.5){ 
        return nivel[1]
    } 

    if (imc < 18.5){ 
        return nivel[0]
    }
}