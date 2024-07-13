const drawComments = (parentBlock, data) => {

  parentBlock.addEventListener('click', (e) => {

    if (e.target.closest('a')) {
      e.preventDefault();
    }

  });

  void (data);
};

export { drawComments };
