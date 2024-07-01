import {
  getRandomInt
} from './getRandomInt.js';

const getRandomIntRange = (min, max) => {
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

export { getRandomIntRange };
