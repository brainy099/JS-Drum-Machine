function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
};

function removeTrans(e) {
  if(e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}


window.addEventListener('keydown', playSound);

const keys =  Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTrans));


function playSound2(sample) {
  const audio2 = document.querySelector(`audio[data-key="${sample}"]`)
  const key2 = document.querySelector(`div[data-key="${sample}"]`);
  if (!audio2) return;
  key2.classList.add('playing');
  audio2.currentTime = 0;
  audio2.play();
}
