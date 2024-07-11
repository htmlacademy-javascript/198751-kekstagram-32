const drawComments = (parentBlock, data) => {

  parentBlock.addEventListener('click', (e) => {

    if (e.target.tagName === 'IMG' || e.target.tagName === 'SPAN' || e.target.tagName === 'P') {
      e.preventDefault();
    }

  });

  void (data);
};

export { drawComments };
