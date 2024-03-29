function verificaChute(params) {
  const numero = +chute;

  if (chute == 'game over'){
    alterarContexto('game-over');
    document.body.innerHTML = `
    <h2>Você disse ${chute}!</h2>
    <h3>O número secreto era ${numeroSecreto}!</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
  }

  if(chuteForInvalido(numero)) {
    elementoChute.innerHTML += '<div>Valor inválido</div>';
    return
  }

  if (numeroForMaiorOuMenorQueOLimite(numero)){
    elementoChute.innerHTML += `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`;
    return
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}!</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>

    <div class="confetti">
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    </div>
    `
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `
  } else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `
  }
  
}



function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}


function numeroForMaiorOuMenorQueOLimite(numero) {
  return numero > maiorValor || numero < menorValor;
  
}

document.body.addEventListener('click', e => {
  if (e.target.id == 'jogar-novamente') {
    window.location.reload();
  }
})

