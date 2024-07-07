import { getData } from './get-data.js';

const COUNT_COMMENTS = 25;

const arrayPhotos = Array.from({ length: COUNT_COMMENTS }, getData);

// console.table(arrayPhotos);

void (arrayPhotos);
