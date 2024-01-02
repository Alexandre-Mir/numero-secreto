const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');


const menorValor = 1;
const maiorValor = 100;

const numeroSecreto = gerarNumeroSecreto();

function gerarNumeroSecreto () {
  return parseInt(Math.random() * maiorValor + 1)
}


elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

console.log(numeroSecreto)
