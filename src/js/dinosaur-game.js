import { updateGround, setupGround } from './dinosaur/ground.js';
import { updateDino, setupDino } from './dinosaur/dino.js';

const startBtn = document.getElementById('dinosaur__start-btn');
const scoreEl = document.getElementById('score');

const SPEED_SCALE_INCREASE = 0.00001;

let lastTime;
let speedScale;
let score;

function update(time) {
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(update);
    return;
  }

  const delta = time - lastTime;

  updateGround(delta, speedScale);
  updateDino(delta, speedScale);
  updateSpeedScale(delta);
  updateScore(delta);

  lastTime = time;
  window.requestAnimationFrame(update);
}

function updateSpeedScale(delta) {
  speedScale += delta * SPEED_SCALE_INCREASE;
}

function updateScore(delta) {
  score += delta * 0.01;
  scoreEl.textContent = Math.floor(score);
}

startBtn.addEventListener('click', onStartBtnClick);
function onStartBtnClick() {
  lastTime = null;
  speedScale = 1;
  score = 0;
  setupGround();
  setupDino();
  window.requestAnimationFrame(update);
}
