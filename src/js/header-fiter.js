const filterList = document.getElementById('submenu__filter-list');
const sections = document.querySelectorAll('main section');
const filterAllBtn = document.querySelector('.nav__link');

filterList.addEventListener('click', onFilterItemClick);
filterAllBtn.addEventListener('click', onAllBtnClick);

function onFilterItemClick(e) {
  const filterTarget = e.target.id;

  if (
    filterTarget === 'numerical' ||
    filterTarget === 'game' ||
    filterTarget === 'acquaintance'
  ) {
    sections.forEach(section => {
      if (section.dataset.category === filterTarget) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }
}

function onAllBtnClick(e) {
  e.preventDefault();

  sections.forEach(section => {
    section.style.display = 'block';
  });
}
