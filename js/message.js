import { isEscKey } from './util';

const templateSuccess = document.querySelector('#success').content;
const successButton = templateSuccess.querySelector('.success__button');
const templateError = document.querySelector('#error').content;
const errorButton = templateError.querySelector('.error__button');
const templateDataError = document.querySelector('#data-error').content;

const showSuccess = () => {
  document.body.append(templateSuccess);

  const onFormKeydown = (evt) => {
    if (isEscKey(evt)) {
      closeSuccess();
    }
  };

  successButton.addEventListener('click', closeSuccess);
  document.addEventListener('keydown', onFormKeydown);

  function closeSuccess() {
    document.querySelector('.success').remove();
    document.removeEventListener('keydown', onFormKeydown);
  }
};

const showError = () => {
  document.body.append(templateError);

  const onFormKeydown = (evt) => {
    evt.stopPropagation();
    if (isEscKey(evt)) {
      closeError();
    }
  };

  errorButton.addEventListener('click', closeError);
  document.addEventListener('keydown', onFormKeydown);

  function closeError() {
    document.querySelector('.error').remove();
    document.removeEventListener('keydown', onFormKeydown);
  }
};

const showDataError = () => {
  document.body.append(templateDataError);

  window.setTimeout(() => {
    document.querySelector('.data-error').remove();
  }, 5000);
};

export { showSuccess, showError, showDataError };
