const icon = document.getElementById('icon');

icon.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    icon.src =
      'https://raw.githubusercontent.com/Roman-Glyshanitsya/js-practice/12898105bb66a4c2b486a06e94e02a25500877fa/src/img/icons/dark-theme-icon.svg';
  } else {
    icon.src =
      'https://raw.githubusercontent.com/Roman-Glyshanitsya/js-practice/12898105bb66a4c2b486a06e94e02a25500877fa/src/img/icons/light-theme-icon.svg';
  }
});
