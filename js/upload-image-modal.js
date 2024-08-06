import { isEscKey } from './util';
import { clearValidator } from './form';

import { form } from './form.js';
import { pictureEffectInit, pictureEffectReset } from './picture-effect.js';
import { pictureScale, pictureScaleDefault } from './picture-scale.js';

form();
pictureEffectInit();
pictureScale();

const uploadImageModal = () => {
  const imgUploadInput = document.querySelector('.img-upload__input');
  const imgUploadOverlay = document.querySelector('.img-upload__overlay');
  const imgUploadCancel = document.querySelector('.img-upload__cancel');

  const onFormKeydown = (evt) => {
    if (document.activeElement.name === 'hashtags' || document.activeElement.name === 'description') {
      return;
    }

    if (isEscKey(evt)) {
      closeModal();
    }
  };

  imgUploadInput.addEventListener('input', () => {
    imgUploadOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
    pictureEffectReset();

    document.addEventListener('keydown', onFormKeydown);
    imgUploadCancel.addEventListener('click', closeModal);
  });

  function closeModal() {
    imgUploadOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');

    document.removeEventListener('keydown', onFormKeydown);
    imgUploadCancel.removeEventListener('click', closeModal);
    document.querySelector('.img-upload__form').reset();
    clearValidator();
    pictureScaleDefault();
  }
};

export {
  uploadImageModal
};
