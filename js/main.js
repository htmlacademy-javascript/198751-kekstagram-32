// import { getData } from './get-data.js';
// import { drawThumnail } from './draw-thumnail.js';
// import { onThumnailClick } from './draw-comments.js';
import { api } from './api.js';
import { uploadImageModal } from './upload-image-modal.js';

// fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
//   .then((response) => response.json())
//   .then((data) => {
//     drawThumnail(data);
//     onThumnailClick(data);
//   });

api();
uploadImageModal();
