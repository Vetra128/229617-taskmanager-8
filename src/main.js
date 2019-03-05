import {getRandomInteger} from './utils';
import getFilterElement from './filter-element';
import getCardElement from './card-element';

const Filter = {
  ALL: `All`,
  OVERDUE: `Overdue`,
  TODAY: `Today`,
  FAVORITES: `Favorites`,
  REPEATING: `Repeating`,
  TAGA: `Tags`,
  ARCHIVE: `archive`,
};

const NUMBER_OF_CARDS = 7;

const filterWrapper = document.querySelector(`.main__filter`);
const cardWrapper = document.querySelector(`.board__tasks`);

let fragment = ``;

const renderFilters = (filters) => {
  Object.values(filters).forEach((name) => {
    fragment += getFilterElement(name, getRandomInteger());
  });
  filterWrapper.innerHTML = ``;

  filterWrapper.insertAdjacentHTML(`beforeend`, fragment);
};

const renderTasks = (num = getRandomInteger()) => {
  fragment = ``;
  cardWrapper.innerHTML = ``;
  while (num > 0) {
    num -= 1;
    fragment += getCardElement();
  }

  cardWrapper.insertAdjacentHTML(`beforeend`, fragment);
};

renderFilters(Filter);

renderTasks(NUMBER_OF_CARDS);

filterWrapper.addEventListener(`change`, () => {
  renderTasks();
});
