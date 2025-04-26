import lightIcon from '../img/icons/light-theme-icon.svg';
import darkIcon from '../img/icons/dark-theme-icon.svg';

const icon = document.getElementById('icon');

icon.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    icon.src = darkIcon;
  } else {
    icon.src = lightIcon;
  }
});
