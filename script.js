'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const Player1 = document.getElementById('current--0');
const Player2 = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

let activeplayer = 0;
let playing = true;
const scoresp1p2 = [0, 0];
const switchkhildahi = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentScore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

let currentScore = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnroll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      // Player1.textContent = currentScore;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
    } else {
      switchkhildahi();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    scoresp1p2[activeplayer] += currentScore;
    console.log(activeplayer);
    document.getElementById(`score--${activeplayer}`).textContent =
      scoresp1p2[activeplayer];
    if (scoresp1p2[activeplayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      switchkhildahi();
    }
  }
});
