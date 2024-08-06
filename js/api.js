import { drawThumnail } from './draw-thumnail.js';
import { onThumnailClick } from './draw-comments.js';

const api = () => {
  fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((data) => {
      drawThumnail(data);
      onThumnailClick(data);
    });
};

export { api };
