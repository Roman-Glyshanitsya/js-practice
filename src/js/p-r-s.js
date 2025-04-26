import stone from '../img/icons/stone.svg';
import scissors from '../img/icons/scissors.svg';
import paper from '../img/icons/paper.svg';

const userChoiceBtns = document.getElementById('buttons-list');
const compChoiceEl = document.getElementById('comp-choice');
const winnerText = document.getElementById('winner-text');
const compResults = document.getElementById('comp-result');
const userResults = document.getElementById('user-result');

let compWins = 0;
let userWins = 0;

function compChoiceMarkup(element) {
  if (element === 'stone') {
    compChoiceEl.innerHTML = `<img src="${stone}" />`;
  } else if (element === 'scissors') {
    compChoiceEl.innerHTML = `<img src="${scissors}" />`;
  } else if (element === 'paper') {
    compChoiceEl.innerHTML = `<img src="${paper}" />`;
  } else {
    compChoiceEl.innerHTML = '';
  }
}

userChoiceBtns.addEventListener('click', e => {
  const choiceArray = ['stone', 'scissors', 'paper'];
  const computerRandomNumber = Math.floor(Math.random() * 3);
  const computerChoice = choiceArray[computerRandomNumber];

  compChoiceMarkup(computerChoice);

  if (e.target.id === computerChoice) {
    winnerText.textContent = 'Нічия!';
    winnerText.style.color = 'var(--secondary-color)';
  } else if (
    (e.target.id === 'stone' && computerChoice === 'scissors') ||
    (e.target.id === 'scissors' && computerChoice === 'paper') ||
    (e.target.id === 'paper' && computerChoice === 'stone')
  ) {
    winnerText.textContent = 'Ви виграли раунд!';
    winnerText.style.color = '#039900';
    userResults.textContent = userWins += 1;
  } else {
    winnerText.textContent = 'Комп’ютер виграв раунд!';
    winnerText.style.color = '#900';
    compResults.textContent = compWins += 1;
  }
});
