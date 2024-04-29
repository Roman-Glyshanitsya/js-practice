import { scientists } from '../data/scientist-data';

const sceintistGalleryList = document.getElementById('scientist-gallery');
const sceintistBtnsList = document.getElementById('scientist__filter-list');

function markupScientistGalary(scientists) {
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

sceintistGalleryList.innerHTML = markupScientistGalary(scientists);

sceintistBtnsList.addEventListener('click', filteredScientest);

function filteredScientest(e) {
  switch (e.target.id) {
    case '1':
      sceintistGalleryList.innerHTML = markupScientistGalary(
        scientists.filter(({ born }) => born >= 1800 && born < 1900)
      );
      break;

    // case '2':
    //   sceintistGalleryList.innerHTML = markupScientistGalary(
    //     scientists.find(
    //       ({ name, surname }) => name === 'Albert' && surname === 'Einstein'
    //     )
    //   );
    //   break;

    case '3':
      sceintistGalleryList.innerHTML = markupScientistGalary(
        [...scientists].sort((a, b) => a.name.localeCompare(b.name))
      );
      break;

    case '4':
      sceintistGalleryList.innerHTML = markupScientistGalary(
        scientists.filter(({ surname }) => surname.startsWith('C'))
      );
      break;

    case '5':
      sceintistGalleryList.innerHTML = markupScientistGalary(
        [...scientists].sort((a, b) => a.dead - a.born - (b.dead - b.born))
      );
      break;

    case '6':
      sceintistGalleryList.innerHTML = markupScientistGalary(
        scientists.filter(({ name }) => name[0] !== 'A')
      );
      break;

    case '7':
      sceintistGalleryList.innerHTML =
        markupScientistGalary();
        // scientists.find((a, b) => b.born - a.born)
      break;
  }
}
