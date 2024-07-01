import {
  data
} from './data.js';

import {
  getRandomInt
} from './getRandomInt.js';

import {
  getRandomIntRange
} from './getRandomIntRange.js';

import {
  isCount
} from './isCount.js';

const createId = getRandomIntRange(1, 25);
const createCountLike = getRandomIntRange(15, 200);

const createCountDescription = getRandomIntRange(0, 24);
const createTextDescription = () => data.description[createCountDescription()];

const createNamePhothos = getRandomIntRange(1, 25);
const createUrlPhothos = () => `img/${createNamePhothos()}.jpg`;

const createUrlAvatar = () => `img/${getRandomInt(1, 6)}.svg`;
const createTextComments = () => data.comments[getRandomInt(1, 6)];
const createCommentsId = isCount();

const createComments = () => ({
  id: createCommentsId(),
  avatar: createUrlAvatar(),
  message: createTextComments(),
  name: data.name[getRandomInt(1, 30)]
});

const createObjectTextComments = () =>
  Array.from({
    length: getRandomInt(0, 29)
  }, createComments);


const createObjectPhotos = () => ({
  id: createId(),
  likes: createCountLike(),
  url: createUrlPhothos(),
  description: createTextDescription(),
  comments: createObjectTextComments()
});

export {
  createObjectPhotos
};
