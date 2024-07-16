const createCooments = (count, comments) => {
  count = Number(count);

  const commentsFragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const element = comments[i];

    const item = document.createElement('li');
    item.classList.add('social__comment');

    const ava = document.createElement('img');
    ava.classList.add('social__picture');
    ava.src = element.avatar;
    ava.alt = element.name;
    ava.width = 35;
    ava.height = 35;

    const textComment = document.createElement('p');
    textComment.classList.add('social__text');
    textComment.innerText = element.message;

    item.append(ava);
    item.append(textComment);
    commentsFragment.append(item);
  }
  const socialComments = document.querySelector('.social__comments');
  socialComments.append(commentsFragment);
};

const renderComments = (bigPicture, {
  url,
  description,
  likes,
  comments
}) => {

  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').innerText = likes;
  bigPicture.querySelector('.social__caption').innerText = description;

  const socialComments = document.querySelector('.social__comments');

  const count = comments.length > 5 ? 5 : comments.length;

  socialComments.innerHTML = '';

  if (count === 0) {
    document.querySelector('.social__comment-count').classList.add('hidden');
    document.querySelector('.comments-loader').classList.add('hidden');
  } else if (comments.length === 5) {
    bigPicture.querySelector('.social__comment-shown-count').innerText = 5;
    bigPicture.querySelector('.social__comment-total-count').innerText = 5;
    document.querySelector('.comments-loader').classList.add('hidden');
    createCooments(count, comments);
  } else {
    bigPicture.querySelector('.social__comment-shown-count').innerText = count;
    bigPicture.querySelector('.social__comment-total-count').innerText = comments.length;
    createCooments(count, comments);
  }
};

const onThumnailClick = (parentBlockThumnail, bigPicture, data) => {

  parentBlockThumnail.addEventListener('click', (e) => {

    if (!e.target.closest('a')) {
      return;
    }

    e.preventDefault();
    bigPicture.classList.remove('hidden');

    const idPicture = Number(e.target.closest('a').dataset.id);
    const objectCurrentPhoto = data[data.findIndex((elem) => elem.id === idPicture)];
    renderComments(bigPicture, objectCurrentPhoto);
    document.body.classList.add('modal-open');

    const onParentBlockThumnailKeydown = (evt) => {
      if (evt.code === 'Escape') {
        closeModal(bigPicture);
      }
    };

    function closeModal() {
      document.body.classList.remove('modal-open');
      bigPicture.classList.add('hidden');
      document.removeEventListener('keydown', onParentBlockThumnailKeydown);
      bigPicture.querySelector('.big-picture__cancel').removeEventListener('click', closeModal);
    }

    document.addEventListener('keydown', onParentBlockThumnailKeydown);

    bigPicture.querySelector('.big-picture__cancel').addEventListener('click', closeModal);

  });

};

export {
  onThumnailClick
};
