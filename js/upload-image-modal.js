import { isEscKey } from './util';
import { form, getIsValid, clearValidator } from './form.js';
import { pictureEffectInit, pictureEffectReset } from './picture-effect.js';
import { pictureScale, pictureScaleDefault } from './picture-scale.js';
import { showSuccess, showError } from './message.js';

const uploadFormImg = document.querySelector('.img-upload__form');

form();
pictureEffectInit();
pictureScale();

const uploadImageModal = () => {
  const imgUploadInput = document.querySelector('.img-upload__input');
  const imgUploadOverlay = document.querySelector('.img-upload__overlay');
  const imgUploadCancel = document.querySelector('.img-upload__cancel');

  const onFormKeydown = (evt) => {
    if (document.activeElement.name === 'hashtags' || document.activeElement.name === 'description' || document.querySelector('.error')) {
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

  const onSuccess = () => {
    closeModal();
    showSuccess();
  };

  uploadFormImg.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = getIsValid();

    if (isValid) {
      const formData = new FormData(evt.target);
      fetch(
        'https://32.javascript.htmlacademy.pro/kekstagram',
        {
          method: 'POST',
          body: formData,
        },
      ).then((response) => {
        if (response.status >= 200 && response.status < 300 && response.ok) {
          return onSuccess();
        }
        throw new Error(showError);
      })
        .catch(() => {
          showError();
        });
    }
  });

};

export {
  uploadImageModal
};
