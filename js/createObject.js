import { getRandomInt } from './getRandomInt.js';
import { data } from './data.js';

const getRandomIntFromGenerator = (min, max) => {
  const arrNumberBefore = [];

  return function () {
    let currentNumber = getRandomInt(min, max);

    if (arrNumberBefore.length >= (max - min + 1)) {
      return null;
    }


    while (arrNumberBefore.includes(currentNumber)) {
      currentNumber = getRandomInt(min, max);
    }

    arrNumberBefore.push(currentNumber);

    return currentNumber;
  };
};

const createId = getRandomIntFromGenerator(1, 25);
const createCountLike = getRandomIntFromGenerator(15, 200);

const createCountDescription = getRandomIntFromGenerator(0, 24);
const createTextDescription = () => data.description[createCountDescription()];

const createCountComments = getRandomIntFromGenerator(0, 29);
const createTextComments = () => data.comments[createCountComments()];

const createNamePhothos = getRandomIntFromGenerator(1, 25);
const createUrlPhothos = () => `/${createNamePhothos()}.jpg`;

const createObject = () => (
  {
    id: createId(),
    likes: createCountLike(),
    url: createUrlPhothos(),
    description: createTextDescription(),
    comments: createTextComments()
  }
);

export { createObject };
