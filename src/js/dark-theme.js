import darkUrl from '../../assets/dark-theme-icon.svg';
import lightUrl from '../../assets/light-theme-icon.svg';

const icon = document.getElementById('icon');

icon.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    icon.src = darkUrl;
  } else {
    icon.src = lightUrl;
  }
});
