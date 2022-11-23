const elementoChute = document.querySelector('#chute');
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', function speak(evento) {
  const chute = evento.results[0][0].transcript;
  exibeChute(chute);
  verificaSeValorEValido(chute);
});

function exibeChute(chute) {
  elementoChute.innerHTML = `
  <div>Você disse:</div>
  <span class="box">${chute}</span>
  `;
}

recognition.addEventListener('end', () => recognition.start());
