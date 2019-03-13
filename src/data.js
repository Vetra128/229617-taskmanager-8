import {getRandomInteger} from './utils';

const MIN_INDEX = 0;
const MAX_INDEX = 2;

const tagGenerate = () => {
  let quantity = getRandomInteger(MIN_INDEX, MAX_INDEX);
  const tagArray = [];
  while (quantity > 0) {
    quantity -= 1;
    tagArray.push(HASH[getRandomInteger(0, HASH.length)]);
  }
  return tagArray;
};

const HASH = [`homework`, `theory`, `practice`, `intensive`, `keks`, `morning`, `flower`];

const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

const TITLES = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];
export const cardList = {
  title: TITLES[getRandomInteger(0, 2)],
  dueDate: (Date.now() + (Math.floor(Math.random() * 14 * 24 * 60) * 60 * 1000) - 7),
  tags: new Set(tagGenerate()),
  picture: `http://picsum.photos/100/100?r=${Math.random()}`,
  color: COLORS[getRandomInteger(0, COLORS.length - 1)],
  repeatingDays: [{
    Mo: Math.random() < 0.5,
    Tu: Math.random() < 0.5,
    We: Math.random() < 0.5,
    Th: Math.random() < 0.5,
    Fr: Math.random() < 0.5,
    Sa: Math.random() < 0.5,
    Su: Math.random() < 0.5,
  }],
  isFavorite: Math.random() < 0.5,
  isDone: Math.random() < 0.5
};
