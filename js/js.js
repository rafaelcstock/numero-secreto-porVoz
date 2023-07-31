const menorValor = 1
const maiorValor = 1000
const numeroSecreto = geraNumeroSecreto ()

function geraNumeroSecreto () {
    return parseInt (Math.random() * maiorValor + 1)
}

console.log( 'Número Secreto:', numeroSecreto );

const elementoMenorValor = document.getElementById('vi')
elementoMenorValor.innerHTML = menorValor 

const elementoMaiorValor = document.getElementById('vf')
elementoMaiorValor.innerHTML = maiorValor 
