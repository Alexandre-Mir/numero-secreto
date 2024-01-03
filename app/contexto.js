const html = document.querySelector('html');
const elementoConfete = document.getElementById('confete');

function alterarContexto(contexto) {
  html.setAttribute('data-contexto', contexto);
  if (contexto == 'acertou') {
    // elementoConfete.classList.toggle('confetti');
      // elementoConfete.children.classList.toggle('congetti-piece');
  }
}