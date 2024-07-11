import { getData } from './get-data.js';
import { drawThumnail } from './draw-thumnail.js';

const COUNT_PHOTOS = 25;

const arrayPhotos = Array.from({ length: COUNT_PHOTOS }, getData);

drawThumnail(arrayPhotos, document.querySelector('.pictures'));
