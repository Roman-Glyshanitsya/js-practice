const firstInput = document.getElementById('first-input');
const secondtInput = document.getElementById('second-input');
const thirdtInput = document.getElementById('third-input');
const resultEl = document.getElementById('max-number');

function findBiggestNumber() {
  const maxNumber = Math.max(
    firstInput.value,
    secondtInput.value,
    thirdtInput.value
  );
  resultEl.textContent = maxNumber;
}

document.addEventListener('input', findBiggestNumber);
