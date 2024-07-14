/*
Реализовать сценарий просмотра фотографий в полноразмерном режиме. В таком режиме пользователь получает несколько дополнительных возможностей: детально рассмотреть изображение, поставить «лайк», почитать комментарии, оставленные другими пользователями.

1. Заведите модуль, который будет отвечать за отрисовку окна с полноразмерным изображением.

2. Окно должно открываться при клике на миниатюру.Данные для окна(изображение, комментарии, лайки и так далее) берите из того же объекта, который использовался для отрисовки соответствующей миниатюры.

3. Для отображения окна нужно удалять класс hidden у элемента.big-picture и каждый раз заполнять его данными о конкретной фотографии:

  - Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.

  - Количество лайков likes подставьте как текстовое содержание элемента .likes-count.

  - Количество показанных комментариев подставьте как текстовое содержание элемента .social__comment-shown-count.

  - Общее количество комментариев к фотографии comments подставьте как текстовое содержание элемента .social__comment-total-count.

  - Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:

    <li class="social__comment">
      <img
        class="social__picture"
        src="{{аватар}}"
        alt="{{имя комментатора}}"
        width="35" height="35">
        <p class="social__text">{{ текст комментария }}</p>
    </li>

  - Описание фотографии description вставьте строкой в блок .social__caption.

4. После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.

5. После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле.При закрытии окна не забудьте удалить этот класс.

7. Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.
*/

const renderComments = (bigPicture, objectCurrentPhoto) => {

  bigPicture.querySelector('.big-picture__img img').src = objectCurrentPhoto.url;
  bigPicture.querySelector('.big-picture__img img').alt = objectCurrentPhoto.description;
  bigPicture.querySelector('.likes-count').innerText = objectCurrentPhoto.likes;
  bigPicture.querySelector('.social__comment-shown-count').innerText = objectCurrentPhoto.comments.length;
  bigPicture.querySelector('.social__comment-total-count').innerText = objectCurrentPhoto.comments.length;
  bigPicture.querySelector('.social__caption').innerText = objectCurrentPhoto.description;

  const socialComments = document.querySelector('.social__comments');
  const commentsFragment = document.createDocumentFragment();

  objectCurrentPhoto.comments.forEach((element) => {

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

  });

  socialComments.innerHTML = '';
  socialComments.append(commentsFragment);

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

    document.querySelector('.social__comment-count').classList.add('hidden');
    document.querySelector('.comments-loader').classList.add('hidden');

    const onParentBlockThumnailKeydown = (evt) => {
      if (evt.code === 'Escape') {
        closeModal(bigPicture);
      }
    };

    function closeModal () {
      document.body.classList.remove('modal-open');
      bigPicture.classList.add('hidden');
      document.removeEventListener('keydown', onParentBlockThumnailKeydown);
      bigPicture.querySelector('.big-picture__cancel').removeEventListener('click', closeModal);
    }

    document.addEventListener('keydown', onParentBlockThumnailKeydown);

    bigPicture.querySelector('.big-picture__cancel').addEventListener('click', closeModal);

  });

};

const drawComments = (parentBlockThumnail, bigPicture, data) => {

  onThumnailClick(parentBlockThumnail, bigPicture, data);

};

export {
  drawComments
};
