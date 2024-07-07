const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isCount = (count = 0) =>
  function () {
    return count++;
  };

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

export {
  getRandomIntRange,
  isCount,
  getRandomInt
};
