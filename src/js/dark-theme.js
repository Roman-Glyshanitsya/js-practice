const icon = document.getElementById('icon');

icon.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    icon.src = '/public/dark-theme-icon.svg';
  } else {
    icon.src = '/public/light-theme-icon.svg';
  }
});
