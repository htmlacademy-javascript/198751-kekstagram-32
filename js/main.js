import { getData } from './get-data.js';
import { drawThumnail } from './draw-thumnail.js';
import { drawComments } from './draw-comments.js';

const COUNT_PHOTOS = 25;

const arrayPhotos = Array.from({ length: COUNT_PHOTOS }, getData);

drawThumnail(arrayPhotos, document.querySelector('.pictures'));

// просто отменяю клик на ссылку грубо и неправильно
drawComments(document.querySelector('.pictures'), arrayPhotos);
