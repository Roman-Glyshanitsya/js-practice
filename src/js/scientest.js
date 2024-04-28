import { scientists } from '../data/scientist-data';

console.log(scientists);

const sceintistGalleryList = document.getElementById('scientist-gallery');

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

sceintistGalleryList.insertAdjacentHTML(
  'afterbegin',
  createsScientistGalary(scientists)
);
