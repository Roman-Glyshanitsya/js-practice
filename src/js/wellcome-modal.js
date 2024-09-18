const closeBtn = document.querySelector('.wellcome-window__close-btn');
const saveBtn = document.querySelector('.wellcome-window__button');
const modalBackdrop = document.querySelector('.backdrop');
const input = document.querySelector('.wellcome-window__input');
const userName = document.querySelector('.user__name');

closeBtn.addEventListener('click', onCloseBtnClick);
saveBtn.addEventListener('click', onSaveBtnClick);

function onCloseBtnClick(e) {
  modalBackdrop.classList.add('is-hidden');
}

function onSaveBtnClick(e) {
  e.preventDefault();

  modalBackdrop.classList.add('is-hidden');

  if (input.value) {
    userName.textContent = input.value;
  } else {
    userName.textContent = 'User';
  }
}
