import { scientists } from '../data/scientist-data';

const sceintistGalleryList = document.getElementById('scientist-gallery');
const sceintistBtnsList = document.querySelectorAll('.scientist__button');

function createsScientistGalary(scientists) {
  return scientists
    .map(({ name, surname, image, born, dead, id }) => {
      return `
      <li id="${id}" class="scientist__item" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('${image}');">
      <div class="scientist__text-thumb">
      <p>${name} ${surname}</p>
      <p>${born}-${dead}</p>
      </div>
      </li>`;
    })
    .join('');
}

const filtered = scientists
  .filter(({ born }) => born >= 1800 && born < 1900)
  .map(({ name, surname, image, born, dead, id }) => {
    return `
      <li id="${id}" class="scientist__item" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('${image}');">
      <div class="scientist__text-thumb">
      <p>${name} ${surname}</p>
      <p>${born}-${dead}</p>
      </div>
      </li>`;
  })
  .join('');

// //  Які вчені народилися в 19 ст.

sceintistBtnsList[0].addEventListener('click', () => {
  sceintistGalleryList.insertAdjacentHTML('afterbegin', filtered);
});
