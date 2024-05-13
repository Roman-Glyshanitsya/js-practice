const form = document.getElementById('birth-year-form');
const btnYear = document.getElementById('year__btn');
const textYear = document.getElementById('year__text');

btnYear.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();
  if (form.year.value % 4 === 0 && form.year.value > 0) {
    textYear.textContent = 'Ви народилися у високосний рік!';
    textYear.style.color = '#039900';
  } else if (form.year.value % 4 !== 0 && form.year.value > 0) {
    textYear.textContent = 'Ви народилися не у високосний рік!';
    textYear.style.color = '#990000';
  } else {
    textYear.textContent = 'Введіть коректну дату!';
    textYear.style.color = '#990000';
  }
}

// form.addEventListener('blur', () => {
//   form.year.value = '';
//   textYear.textContent = '';
// });
