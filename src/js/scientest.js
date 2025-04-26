import { scientists } from '../data/scientist-data';

const sceintistGalleryList = document.getElementById('scientist-gallery');
const sceintistBtnsList = document.getElementById('scientist__filter-list');

// Імпортуємо ВСІ картинки
const scientistImagesImport = import.meta.glob('../img/scientists/*.jpg', {
  eager: true,
});

// Формуємо об'єкт для зручного доступу
const scientistImages = {};

for (const path in scientistImagesImport) {
  const fileName = path.split('/').pop();
  scientistImages[fileName] = scientistImagesImport[path].default;
}

function markupScientistGallery(scientists) {
  return scientists
    .map(({ name, surname, born, dead, id }) => {
      const fileName = `${name.toLowerCase()}-${surname.toLowerCase()}.jpg`;
      const imageUrl = scientistImages[fileName] || '';

      return `
      <li id="${id}" class="scientist__item" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${imageUrl});">
        <div class="scientist__text-thumb">
          <p>${name} ${surname}</p>
          <p>${born}-${dead}</p>
        </div>
      </li>`;
    })
    .join('');
}

// Функція для плавної появи картинок
function animateScientistItems() {
  const scientistItems = document.querySelectorAll('.scientist__item');
  scientistItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('visible');
    }, index * 100); // Плавне з'явлення кожного елемента
  });
}

// Функція для оновлення галереї
function updateGallery(scientistsArray) {
  sceintistGalleryList.innerHTML = markupScientistGallery(scientistsArray);
  animateScientistItems(); // Анімація після оновлення
}

// Спочатку виводимо всю галерею
updateGallery(scientists);

sceintistBtnsList.addEventListener('click', filteredScientest);

function filteredScientest(e) {
  switch (e.target.id) {
    case '1':
      updateGallery(
        scientists.filter(({ born }) => born >= 1800 && born < 1900)
      );
      break;
    case '2':
      updateGallery([
        scientists.find(
          ({ name, surname }) => name === 'Albert' && surname === 'Einstein'
        ),
      ]);
      break;
    case '3':
      updateGallery(
        [...scientists].sort((a, b) => a.name.localeCompare(b.name))
      );
      break;
    case '4':
      updateGallery(
        scientists.filter(({ surname }) => surname.startsWith('C'))
      );
      break;
    case '5':
      updateGallery(
        [...scientists].sort((a, b) => a.dead - a.born - (b.dead - b.born))
      );
      break;
    case '6':
      updateGallery(scientists.filter(({ name }) => name[0] !== 'A'));
      break;
    case '7':
      updateGallery([[...scientists].sort((a, b) => b.born - a.born)[0]]);
      break;
    case '8':
      const longestLived = scientists.reduce((max, current) =>
        current.dead - current.born > max.dead - max.born ? current : max
      );
      const shortestLived = scientists.reduce((min, current) =>
        current.dead - current.born < min.dead - min.born ? current : min
      );
      updateGallery([longestLived, shortestLived]);
      break;
    case '9':
      updateGallery(
        scientists.filter(({ name, surname }) => name[0] === surname[0])
      );
      break;
    default:
      updateGallery(scientists);
  }
}
