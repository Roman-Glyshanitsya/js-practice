const form = document.getElementById('time-calculator-form');
const btnEl = document.getElementById('button');
const result = document.getElementById('result');

btnEl.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();

  const days = Math.floor(form.usernumber.value / 60 / 24);
  const hourse = Math.floor((form.usernumber.value / 60) % 24);
  const minutes = form.usernumber.value % 60;

  if (form.usernumber.value <= 0) {
    result.textContent = 'Введіть додатнє число';
    result.style.color = 'red';
  } else if (hourse <= 9 && minutes <= 9) {
    result.textContent = `${days} дн. 0${hourse}:0${minutes}:00`;
    result.style.color = 'var(--secondary-color)';
  } else if (hourse <= 9) {
    result.textContent = `${days} дн. 0${hourse}:${minutes}:00`;
    result.style.color = 'var(--secondary-color)';
  } else if (minutes <= 9) {
    result.textContent = `${days} дн. ${hourse}:0${minutes}:00`;
    result.style.color = 'var(--secondary-color)';
  } else {
    result.textContent = `${days} дн. ${hourse}:${minutes}:00`;
    result.style.color = 'var(--secondary-color)';
  }
}
