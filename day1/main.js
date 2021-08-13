'use strict'

const keys = document.querySelectorAll('.key');

function play(e) {
    let sound = document.querySelector(`.audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (sound !== null) {
        sound.currentTime = 0;
        sound.play();
        key.classList.add('playing');
    }
}
function remove(e) {
    if (e.propertyName !== "transform") {
        this.classList.remove('playing');
    }
}

keys.forEach(key => key.addEventListener('transitionend', remove));

window.addEventListener('keydown', play)

