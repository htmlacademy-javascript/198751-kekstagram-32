import { isEscKey } from './util';
import { form, getIsValid, clearValidator } from './form.js';
import { pictureEffectInit, pictureEffectReset } from './picture-effect.js';
import { pictureScale, pictureScaleDefault } from './picture-scale.js';

const uploadFormImg = document.querySelector('.img-upload__form');

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
      ).then(closeModal)
        .catch((err) => {
          console.error(err.message);
        });
    }
  });

};


export {
  uploadImageModal
};

/*
3.3.При успешной отправке формы форма редактирования изображения закрывается, все данные, введённые в форму, и контрол фильтра приходят в исходное состояние:

масштаб возвращается к 100 %;
эффект сбрасывается на «Оригинал»;
поля для ввода хэштегов и комментария очищаются;
поле загрузки фотографии, стилизованное под букву «О» в логотипе, очищается.
3.4.Если отправка данных прошла успешно, показывается соответствующее сообщение.Разметку сообщения, которая находится в блоке #success внутри шаблона template, нужно разместить перед закрывающим тегом </body >.Сообщение должно удаляться со страницы после нажатия на кнопку.success__button, по нажатию на клавишу Esc и по клику на произвольную область экрана за пределами блока с сообщением.

3.5.Если при отправке данных произошла ошибка запроса, нужно показать соответствующее сообщение.Разметку сообщения, которая находится в блоке #error внутри шаблона template, нужно разместить перед закрывающим тегом </body >.Сообщение должно удаляться со страницы после нажатия на кнопку.error__button, по нажатию на клавишу Esc и по клику на произвольную область экрана за пределами блока с сообщением.В таком случае вся введённая пользователем информация сохраняется, чтобы у него была возможность отправить форму повторно.
*/
