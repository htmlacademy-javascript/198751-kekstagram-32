import { drawThumnail } from './draw-thumnail.js';
import { onThumnailClick } from './draw-comments.js';
import { showDataError } from './message.js';
const api = () => {
  fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((data) => {
      drawThumnail(data);
      onThumnailClick(data);
    })
    .catch(showDataError);
};

export { api };
