const templateContent = document.querySelector('#picture').content;

const drawThumnail = (data) => {

  const thumnailFragment = document.createDocumentFragment();

  data.forEach(({
    id,
    url,
    description,
    likes,
    comments
  }) => {
    const newPhoto = templateContent.cloneNode(true);
    newPhoto.querySelector('.picture').dataset.id = id;
    if (comments.length > 0) {
      newPhoto.querySelector('.picture').dataset.start = 0;
    }
    newPhoto.querySelector('.picture__img').src = url;
    newPhoto.querySelector('.picture__img').alt = description;
    newPhoto.querySelector('.picture__likes').innerText = likes;
    newPhoto.querySelector('.picture__comments').innerText = comments.length;

    thumnailFragment.append(newPhoto);
  });

  document.querySelector('.pictures').append(thumnailFragment);
};

export {
  drawThumnail
};
