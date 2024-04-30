const userChoiceBtns = document.getElementById('buttons-list');
const compChoiceEl = document.getElementById('comp-choice');
const winnerText = document.getElementById('winner-text');
const compResults = document.getElementById('comp-result');
const userResults = document.getElementById('user-result');

let compWins = 0;
let userWins = 0;
compResults.textContent = `${compWins}`;
userResults.textContent = `${userWins}`;

userChoiceBtns.addEventListener('click', e => {
  //   console.log(e.target.id === 'stone');

  // Comp choices
  const choiceArray = ['stone', 'scissors', 'paper'];
  const computerRandomNumber = Math.floor(Math.random() * 3);
  const computerChoice = choiceArray[computerRandomNumber];

  if (computerChoice === 'stone') {
    compChoiceEl.innerHTML =
      '<img src="https://raw.githubusercontent.com/Roman-Glyshanitsya/js-practice/7839aaa232fe0e01754605b788e94eafe6daf656/src/img/icons/stone.svg" />';
  }

  if (computerChoice === 'scissors') {
    compChoiceEl.innerHTML =
      '<img src="https://raw.githubusercontent.com/Roman-Glyshanitsya/js-practice/7839aaa232fe0e01754605b788e94eafe6daf656/src/img/icons/scissors.svg" />';
  }

  if (computerChoice === 'paper') {
    compChoiceEl.innerHTML =
      '<img src="https://raw.githubusercontent.com/Roman-Glyshanitsya/js-practice/7839aaa232fe0e01754605b788e94eafe6daf656/src/img/icons/paper.svg" />';
  }

  // User Choices
  //   if (e.target.id === computerChoice) {
  //     winnerText.textContent = 'Нічия!';
  //     }

  //     if (e.target.id === 'scissors' && e.target.id === 'scissors') {
  //       winnerText.textContent = 'Нічия!';
  //     }
});
