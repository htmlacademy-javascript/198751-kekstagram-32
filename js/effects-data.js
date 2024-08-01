const effectsData = {
  chrome: {
    effectsObj: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1,
    },
    filter: 'grayscale',
    unit: ''
  },
  sepia: {
    effectsObj: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1,
    },
    filter: 'sepia',
    unit: ''
  },
  marvin: {
    effectsObj: {
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
      start: 100,
    },
    filter: 'invert',
    unit: '%'
  },
  phobos: {
    effectsObj: {
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
      start: 3,
    },
    filter: 'blur',
    unit: 'px'
  },
  heat: {
    effectsObj: {
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
      start: 3,
    },
    filter: 'brightness',
    unit: ''
  }
};

export { effectsData };
