const isCount = () => {
  let count = 0;

  return function () {
    return count++;
  };
};

export {
  isCount
};
