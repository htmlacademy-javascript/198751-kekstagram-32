import { getData } from './get-data.js';
import { drawThumnail } from './draw-thumnail.js';
import { onThumnailClick } from './draw-comments.js';
import { uploadImageModal } from './upload-image-modal.js';
import { form } from './form.js';

const COUNT_PHOTOS = 25;

const arrayPhotos = Array.from({ length: COUNT_PHOTOS }, getData);

drawThumnail(arrayPhotos);

onThumnailClick(arrayPhotos);

uploadImageModal();

form();
