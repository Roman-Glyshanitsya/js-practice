const inputYear = document.getElementById('year__input');
const btnYear = document.getElementById('year__btn');
const textYear = document.getElementById('year__text');

btnYear.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();
  if (inputYear.value % 4 === 0 && inputYear.value > 0) {
    textYear.textContent = 'Ви народилися у високосний рік!';
    textYear.style.color = '#039900';
  } else if (inputYear.value % 4 !== 0 && inputYear.value > 0) {
    textYear.textContent = 'Ви народилися не у високосний рік!';
    textYear.style.color = '#990000';
  } else {
    textYear.textContent = 'Введіть коректну дату!';
    textYear.style.color = '#990000';
  }
}

inputYear.addEventListener('blur', () => {
  inputYear.value = '';
  textYear.textContent = '';
});
