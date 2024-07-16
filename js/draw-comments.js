const MAX_FIRST_RENDER_COMMENTS = 5;

const createCooments = (comments, link) => {

  document.querySelector('.comments-loader').classList.remove('hidden');
  document.querySelector('.social__comment-count').classList.remove('hidden');

  if (comments.length === 0) {
    document.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('.social__comment-count').classList.add('hidden');
  }

  const startCreate = link.dataset.start;
  let endCreate = Number(startCreate + MAX_FIRST_RENDER_COMMENTS);

  if (endCreate >= comments.length) {
    endCreate = comments.length;
    link.dataset.start = endCreate;
    document.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('.comments-loader').removeEventListener('click', onCommentsLoadClick);
  } else {
    document.querySelector('.comments-loader').addEventListener('click', onCommentsLoadClick);
    link.dataset.start = endCreate;
  }

  function onCommentsLoadClick() {
    createCooments(comments, link);
  }

  document.querySelector('.social__comment-shown-count').innerText = endCreate;
  document.querySelector('.social__comment-total-count').innerText = comments.length;

  const commentsFragment = document.createDocumentFragment();

  for (let i = startCreate; i < endCreate; i++) {
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

const showModal = ({
  url,
  description,
  likes,
  comments
}, link) => {
  const bigPicture = document.querySelector('.big-picture');

  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').innerText = likes;
  bigPicture.querySelector('.social__caption').innerText = description;

  const socialComments = document.querySelector('.social__comments');

  socialComments.innerHTML = '';

  createCooments(comments, link);

};

const onParentBlockThumnailKeydown = (evt) => {
  if (evt.code === 'Escape') {
    closeModal();
  }
};

function closeModal() {
  const bigPicture = document.querySelector('.big-picture');

  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onParentBlockThumnailKeydown);
  bigPicture.querySelector('.big-picture__cancel').removeEventListener('click', closeModal);
}

const onThumnailClick = (data) => {

  const parentBlockThumnail = document.querySelector('.pictures');

  parentBlockThumnail.addEventListener('click', (e) => {

    if (!e.target.closest('a')) {
      return;
    }
    e.preventDefault();

    const bigPicture = document.querySelector('.big-picture');
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');

    const idPicture = Number(e.target.closest('a').dataset.id);
    const objectCurrentPhoto = data[data.findIndex((elem) => elem.id === idPicture)];
    showModal(objectCurrentPhoto, e.target.closest('a'));


    document.addEventListener('keydown', onParentBlockThumnailKeydown);
    bigPicture.querySelector('.big-picture__cancel').addEventListener('click', closeModal);

  });

};

export {
  onThumnailClick
};
