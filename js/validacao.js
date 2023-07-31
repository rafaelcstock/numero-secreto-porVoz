function validaChute () {
    const numero = +chute
    
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div> valor inválido </div>'
        return
    }

    if (numeroForaDoJogo(numero)) {
        elementoChute.innerHTML += '<div> valor inválido </div>'
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era ${numeroSecreto} </h3>

            <button id="jogar-novamente" class="btn-jogar"> Jogar Novamente </button>
        `
        
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div> <h3>O número secreto é menor <i class="fa-solid fa-down-long"></i> </h3> </div>
        `
    } else {
        elementoChute.innerHTML += `
        <div> <h3>O número secreto é maior <i class="fa-solid fa-up-long"></i> </h3> </div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForaDoJogo(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})