import { getData } from './get-data.js';
import { drawThumnail } from './draw-thumnail.js';

const COUNT_COMMENTS = 25;

const arrayPhotos = Array.from({ length: COUNT_COMMENTS }, getData);

drawThumnail(arrayPhotos, document.querySelector('.pictures'));
