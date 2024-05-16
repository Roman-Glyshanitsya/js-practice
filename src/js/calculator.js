const firstInput = document.getElementById('calc-first-input');
const secondInput = document.getElementById('calc-second-input');
const operationBtnList = document.querySelectorAll(
  '.calculator__operation__button'
);
const resultBtn = document.querySelector('.calculator__result__button');
const resultEl = document.querySelector('.calculator__result');

let operation = null;

operationBtnList.forEach(btn => {
  btn.addEventListener('click', e => {
    operation = e.currentTarget.textContent;
    // console.log(operation);
    operationBtnList.forEach(btn => btn.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

resultBtn.addEventListener('click', calculate);

function calculate() {
  const firstNumber = parseFloat(firstInput.value);
  const secondNumber = parseFloat(secondInput.value);

  let result = '';

  switch (operation) {
    case '+':
      result = firstNumber + secondNumber;
      break;

    case '-':
      result = firstNumber - secondNumber;
      break;

    case '*':
      result = firstNumber * secondNumber;
      break;

    case '/':
      result = firstNumber / secondNumber;
      break;

    default:
      result = 'Результат';
  }

  resultEl.textContent = result;
}
