const templateSuccess = document.querySelector('#success').content;
const successButton = templateSuccess.querySelector('.success__button');

const showSuccess = () => {
  document.body.append(templateSuccess);
};

const closeSuccess = () => {
  document.querySelector('.success').remove();
};

successButton.addEventListener('click', closeSuccess);

export { showSuccess };
