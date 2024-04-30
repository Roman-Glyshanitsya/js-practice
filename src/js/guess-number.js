const form = document.getElementById('guess-number-form');
const btnGuess = document.getElementById('guess__btn');
const textGuess = document.getElementById('guess__text');

btnGuess.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();

  const computerRandomNumber = Math.floor(Math.random() * 10 + 1);
  let userNumber = Number(form.usernumber.value);

  if (computerRandomNumber === userNumber) {
    textGuess.textContent = `Вітаю, ви вгадали число! ${computerRandomNumber}`;
    textGuess.style.color = '#039900';
  } else if (userNumber > 10) {
    textGuess.textContent = 'Введіть число від 1 до 10!';
    textGuess.style.color = '#990000';
  } else {
    textGuess.textContent = `Ви програли, комп’ютер загадав ${computerRandomNumber}`;
    textGuess.style.color = '#990000';
  }
}

// form.addEventListener('blur', () => {
//   inputGuess.value = '';
//   textGuess.textContent = 'Введіть число від 1 до 10';
// });
