const icon = document.getElementById('icon');

icon.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.src = '/img/icons/moon.svg';
  } else {
    icon.src = '/img/icons/sun.svg';
  }
});
