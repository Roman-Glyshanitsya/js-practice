const form = document.getElementById('time-calculator-form');
const btnEl = document.getElementById('button');
const result = document.getElementById('result');

btnEl.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();

  const days = Math.floor(form.usernumber.value / 60 / 24);
  console.log('days', days);
  const hourse = Math.floor((form.usernumber.value / 60) % 24);
  console.log('hourse', hourse);
  const minutes = form.usernumber.value % 60;
  console.log('minutes', minutes);

  result.textContent = `${days} дн. ${hourse}:${minutes}:00`;
}
