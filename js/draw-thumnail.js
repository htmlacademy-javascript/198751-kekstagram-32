/* Задача
Отобразить фотографии других пользователей.

Заведите модуль, который будет отвечать за отрисовку миниатюр.

На основе временных данных для разработки и шаблона #picture создайте DOM - элементы, соответствующие фотографиям, и заполните их данными:

Адрес изображения url подставьте как атрибут src изображения.
Описание изображения description подставьте в атрибут alt изображения.
Количество лайков likes выведите в блок.picture__likes.
Количество комментариев comments выведите в блок.picture__comments.
Отрисуйте сгенерированные DOM - элементы в блок .pictures.Для вставки элементов используйте DocumentFragment.

Подключите модуль в проект. */

/*
на выходе должна получиться функция, которая с помощью шаблона добавляет на страницу фотографии
А. функция вызывается в main.js и принимает объект в качестве параметра для запонения контентом, второй параметр - блок в котором оджны отрисоваться фотографии
Б. после отработки функции на ленде должны появиться фотографии, при наведении на которые появляется дополнительная информация

1. получить контент шаблона
2. создать фрагменты по клонированному шаблону
3. заполнить контентом каждый фрагмент из полученного объекта
4. добавить фрагменты в html в необходимый блок
*/

const templateContent = document.querySelector('#picture').content;

const drawThumnail = (data, picturesBlock) => {

  const newPhoto = templateContent.cloneNode(true);

  const img = newPhoto.querySelector('.picture__img');
  const likes = newPhoto.querySelector('.picture__likes');
  const comments = newPhoto.querySelector('.picture__comments');

  img.src = data[0].url;
  img.alt = data[0].description;
  likes.innerText = data[0].likes;
  comments.innerText = data[0].comments.length;

};

export { drawThumnail };
