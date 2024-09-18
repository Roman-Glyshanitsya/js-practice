const subscribeBtn = document.querySelector('.footer__form-button');
const subscribeInput = document.querySelector('.footer__form-input');
const tnxBackdrop = document.querySelector('.thanks__backdrop');

subscribeBtn.addEventListener('click', onSubscribeBtnClick);
tnxBackdrop.addEventListener('click', onClick);

function onSubscribeBtnClick(e) {
  e.preventDefault();
  if (subscribeInput.value) {
    tnxBackdrop.classList.remove('is-hidden');
  }
}

function onClick() {
  tnxBackdrop.classList.add('is-hidden');
  subscribeInput.value = '';
}
