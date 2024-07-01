import { createObjectPhotos } from './createObject.js';

const COUNT_COMMENTS = 25;

const arrayPhotos = Array.from({ length: COUNT_COMMENTS }, createObjectPhotos);

// console.table(arrayPhotos);

void (arrayPhotos);
