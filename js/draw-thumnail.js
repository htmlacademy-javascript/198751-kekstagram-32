const templateContent = document.querySelector('#picture').content;

const drawThumnail = (data, picturesBlock) => {

  const thumnailFragment = document.createDocumentFragment();

  data.forEach(({ id, url, description, likes, comments }) => {
    const newPhoto = templateContent.cloneNode(true);
    newPhoto.querySelector('.picture').dataset.id = id;
    newPhoto.querySelector('.picture__img').src = url;
    newPhoto.querySelector('.picture__img').alt = description;
    newPhoto.querySelector('.picture__likes').innerText = likes;
    newPhoto.querySelector('.picture__comments').innerText = comments.length;

    thumnailFragment.append(newPhoto);
  });

  picturesBlock.append(thumnailFragment);
};

export {
  drawThumnail
};
