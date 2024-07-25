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

// const isGetErrorDescription = (value) => {
//   if (value.length > MAX_COMMENTS_LENGTH) {
//     return `длина комментария не может составлять больше ${MAX_COMMENTS_LENGTH} символов`;
//   }
// };

const form = () => {
  const pristine = new Pristine(uploadFormImg, options, true);

  pristine.addValidator(textDescription, (value) => {
    if (value.length > MAX_COMMENTS_LENGTH) {
      return true;
    }
    return false;
  }, `длина комментария не может составлять больше ${MAX_COMMENTS_LENGTH} символов`, 2, false);

};

export {
  form
};

void (MAX_HASHTAG_COUNT, MAX_HASHTAG_LENGTH, textHashtag);
