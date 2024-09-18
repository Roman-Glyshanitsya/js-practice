const closeBtn = document.querySelector('.wellcome-window__close-btn');
const saveBtn = document.querySelector('.wellcome-window__button');
const modalBackdrop = document.querySelector('.backdrop');
const input = document.querySelector('.wellcome-window__input');
const userName = document.querySelector('.user__name');

closeBtn.addEventListener('click', onCloseBtnClick);
saveBtn.addEventListener('click', onSaveBtnClick);

function onCloseBtnClick(e) {
  if (e.currentTarget === closeBtn) {
    modalBackdrop.classList.add('is-hidden');
  }
}

function onSaveBtnClick(e) {
  e.preventDefault();
  if (e.currentTarget === saveBtn) {
    modalBackdrop.classList.add('is-hidden');
    console.log(input.value);
    if (input.value) {
      userName.textContent = input.value;
    } else {
      userName.textContent = 'User';
    }
  }
}
