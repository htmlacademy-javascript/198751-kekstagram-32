const MAX_FIRST_RENDER_COMMENTS = 5;

const onThumnailClick = (data) => {

  const parentBlockThumnail = document.querySelector('.pictures');
  const bigPicture = document.querySelector('.big-picture');

  const createComents = (comments) => {
    if (!Array.isArray(comments)) {
      // не могу получить текущий элемент
      comments = data[data.findIndex((elem) => elem.id === Number(bigPicture.dataset.id))];//.comments
      // id элемента лежит в bigPicture.dataset.id
      // выводил в консоль проверяемые элементы, дожна была сработать проверка, так как сравнивались именно цифры, и была пара схожих
      // ниже этот же способ работает, но получает значение атрибута из другого элемента
    }


    document.querySelector('.comments-loader').classList.remove('hidden');
    document.querySelector('.social__comment-count').classList.remove('hidden');

    if (comments.length === 0) {
      document.querySelector('.comments-loader').classList.add('hidden');
      document.querySelector('.social__comment-count').classList.add('hidden');
    }

    // добавить проверку на === 5

    const startCreate = Number(bigPicture.dataset.start);
    let endCreate = Number(startCreate + MAX_FIRST_RENDER_COMMENTS);

    if (endCreate > comments.length) {
      endCreate = comments.length;
      bigPicture.dataset.start = endCreate;
      document.querySelector('.comments-loader').classList.add('hidden');
    } else {
      endCreate = startCreate + MAX_FIRST_RENDER_COMMENTS;
      bigPicture.dataset.start = endCreate;
    }

    document.querySelector('.social__comment-shown-count').innerText = endCreate;
    document.querySelector('.social__comment-total-count').innerText = comments.length;

    const commentsFragment = document.createDocumentFragment();

    // переделать на slice()
    for (let i = startCreate; i < endCreate; i++) {
      const {
        avatar,
        message,
        name
      } = comments[i];

      const item = document.createElement('li');
      item.classList.add('social__comment');

      const ava = document.createElement('img');
      ava.classList.add('social__picture');
      ava.src = avatar;
      ava.alt = name;
      ava.width = 35;
      ava.height = 35;

      const textComment = document.createElement('p');
      textComment.classList.add('social__text');
      textComment.innerText = message;

      item.append(ava);
      item.append(textComment);
      commentsFragment.append(item);
    }

    const socialComments = document.querySelector('.social__comments');
    socialComments.append(commentsFragment);

  };

  const onCommentsLoaderClick = (comments) => {
    createComents(comments);
  };

  const showModal = ({
    id,
    url,
    description,
    likes,
    comments
  }) => {

    bigPicture.dataset.start = 0;
    bigPicture.dataset.id = id;
    bigPicture.querySelector('.big-picture__img img').src = url;
    bigPicture.querySelector('.big-picture__img img').alt = description;
    bigPicture.querySelector('.likes-count').innerText = likes;
    bigPicture.querySelector('.social__caption').innerText = description;

    const socialComments = document.querySelector('.social__comments');

    socialComments.innerHTML = '';

    createComents(comments);

    document.querySelector('.comments-loader').addEventListener('click', onCommentsLoaderClick);
  };

  const onParentBlockThumnailKeydown = (evt) => {
    if (evt.code === 'Escape') {
      closeModal();
    }
  };

  parentBlockThumnail.addEventListener('click', (e) => {

    if (!e.target.closest('a')) {
      return;
    }
    e.preventDefault();

    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');

    const idPicture = Number(e.target.closest('a').dataset.id);
    const objectCurrentPhoto = data[data.findIndex((elem) => elem.id === idPicture)];
    showModal(objectCurrentPhoto, e.target.closest('a'));


    document.addEventListener('keydown', onParentBlockThumnailKeydown);
    bigPicture.querySelector('.big-picture__cancel').addEventListener('click', closeModal);

  });

  function closeModal() {

    document.body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
    document.removeEventListener('keydown', onParentBlockThumnailKeydown);
    bigPicture.querySelector('.big-picture__cancel').removeEventListener('click', closeModal);
    document.querySelector('.comments-loader').removeEventListener('click', onCommentsLoaderClick);
  }

};

export {
  onThumnailClick
};
