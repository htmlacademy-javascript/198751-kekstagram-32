// . создать слайдер
// . функция записи значения эффекта
// . функция добавления эффекта
// . функция сброса эффекта
// . добавить эффект картинке/сбросить
// . отследить изменение слайдера
// . изменить еффект картинки

import { effectsData } from './effects-data';

const imgUploadPreview = document.querySelector('.img-upload__preview');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevel = document.querySelector('.effect-level');
const effectsList = document.querySelector('.effects__list');

const setValueEffect = (value) => {
  effectLevelValue.value = value;
};

effectsList.addEventListener('change', (evt) => {
  const effect = evt.target.value;

  if (effect === 'none') {
    effectLevel.style.display = 'none';
  } else {
    effectLevel.style.display = null;
    // . получить значение из слайдера
    setValueEffect();
  }
});

const pictureEffect = () => effectsData;
const pictureEffectreset = () => {
  imgUploadPreview.style.filter = null;
};

export { pictureEffect, pictureEffectreset };
