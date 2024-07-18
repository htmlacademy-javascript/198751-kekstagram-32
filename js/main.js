import { getData } from './get-data.js';
import { drawThumnail } from './draw-thumnail.js';
import { onThumnailClick } from './draw-comments.js';

const COUNT_PHOTOS = 25;

const arrayPhotos = Array.from({ length: COUNT_PHOTOS }, getData);

drawThumnail(arrayPhotos);

onThumnailClick(arrayPhotos);
