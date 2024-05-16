const firstInput = document.getElementById('calc-first-input');
const secondInput = document.getElementById('calc-second-input');
const operationBtnList = document.querySelectorAll(
  '.calculator__operation__button'
);
const resultBtn = document.querySelector('.calculator__result__button');
const resultEl = document.querySelector('calculator__result');

let operation = '';

operationBtnList.forEach(btn => {
  btn.addEventListener('click', e => {
    operation = e.currentTarget.textContent;
    operationBtnList.forEach(btn => btn.classList.remove('selected'));
    btn.classList.add('selected');
  });
});
