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
      const filteredByBornList = scientists.filter(
        ({ born }) => born >= 1800 && born < 1900
      );

      sceintistGalleryList.innerHTML =
        markupScientistGalary(filteredByBornList);
      break;

    case '2':
      const einstein = scientists.find(
        ({ name, surname }) => name === 'Albert' && surname === 'Einstein'
      );

      sceintistGalleryList.innerHTML = markupScientistGalary([einstein]);
      break;

    case '3':
      const sortedbyNameList = [...scientists].sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      sceintistGalleryList.innerHTML = markupScientistGalary(sortedbyNameList);
      break;

    case '4':
      const filteredSurnameList = scientists.filter(({ surname }) =>
        surname.startsWith('C')
      );

      sceintistGalleryList.innerHTML =
        markupScientistGalary(filteredSurnameList);
      break;

    case '5':
      const sortedByLifeSpan = [...scientists].sort(
        (a, b) => a.dead - a.born - (b.dead - b.born)
      );

      sceintistGalleryList.innerHTML = markupScientistGalary(sortedByLifeSpan);
      break;

    case '6':
      const sortedByFirstLetter = scientists.filter(
        ({ name }) => name[0] !== 'A'
      );

      sceintistGalleryList.innerHTML =
        markupScientistGalary(sortedByFirstLetter);
      break;

    case '7':
      const filteredByMaxBorn = [...scientists].sort(
        (a, b) => b.born - a.born
      )[0];
      sceintistGalleryList.innerHTML = markupScientistGalary([
        filteredByMaxBorn,
      ]);
      break;

    case '8':
      const longestLivedScientist = scientists.reduce(
        (maxLivedScientist, currentScientist) => {
          const currentLifespan = currentScientist.dead - currentScientist.born;
          const maxLifespan = maxLivedScientist.dead - maxLivedScientist.born;

          return currentLifespan > maxLifespan
            ? currentScientist
            : maxLivedScientist;
        }
      );

      const shortestLivedScientist = scientists.reduce(
        (minLivedScientist, currentScientist) => {
          const currentLifespan = currentScientist.dead - currentScientist.born;
          const minLifespan = minLivedScientist.dead - minLivedScientist.born;

          return currentLifespan < minLifespan
            ? currentScientist
            : minLivedScientist;
        }
      );
      sceintistGalleryList.innerHTML = markupScientistGalary([
        longestLivedScientist,
        shortestLivedScientist,
      ]);
      break;

    case '9':
      const filterByCommonLetter = scientists.filter(
        ({ name, surname }) => name[0] === surname[0]
      );

      sceintistGalleryList.innerHTML =
        markupScientistGalary(filterByCommonLetter);
      break;

    default:
      sceintistGalleryList.innerHTML = markupScientistGalary(scientists);
  }
}
