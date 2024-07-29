const MAX_HASHTAG_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const MAX_COMMENTS_LENGTH = 140;

const uploadFormImg = document.querySelector('.img-upload__form');
const textDescription = document.querySelector('.text__description');
const textHashtag = document.querySelector('.text__hashtags');

const options = {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
};

const descriptionMessage = `длина комментария не может составлять больше ${MAX_COMMENTS_LENGTH} символов`;
const isErrorDescription = (value) => {
  let isValid = true;

  if (value.length > MAX_COMMENTS_LENGTH) {
    isValid = false;
  }

  return isValid;
};

let hashtagsMessage = 'Поле заполнено некорректно.';
const isErrorHashtag = (value) => {
  value = value.split(' ');
  let isValid = true;

  if (value.length > 5) {
    hashtagsMessage = 'asdasda';
    isValid = false;
    return isValid;
  }

  isValid = true;
  [...value].forEach((elem) => {
    if (elem > 2) {
      hashtagsMessage = 'asdasda';
      isValid = false;
      return isValid;
    }
  });
  return isValid;
  // const test = /(#[А-яЁёA-z0-9]{1,19})/g;
};


const form = () => {
  const pristine = new Pristine(uploadFormImg, options, true);

  pristine.addValidator(textDescription, isErrorDescription, descriptionMessage);
  pristine.addValidator(textHashtag, isErrorHashtag, hashtagsMessage);
};

export {
  form
};

void (MAX_HASHTAG_COUNT, MAX_HASHTAG_LENGTH, textHashtag);
