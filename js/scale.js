const SCALE_STEP = 25;
const SCALE_STEP_HIDDEN_VALUE = 0.25;
const PERCENT_PICTURE_SIZE = '100%';
const MIN_SCALE_VALUE = '0.25';
const MAX_SCALE_VALUE = '1';

const scaleControl = document.querySelector('.scale');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const hiddenScale = document.querySelector('#hidden-scale');
const imagePreview = document.querySelector('.img-upload__preview img');

const setDefaultScale = () => {
  scaleValue.value = PERCENT_PICTURE_SIZE;
  hiddenScale.value = '1';
  imagePreview.style.transform = `scale(${hiddenScale.value})`;
};

const reduceScale = () => {
  if (hiddenScale.value !== MIN_SCALE_VALUE) {
    scaleValue.value = `${parseInt(scaleValue.value, 10) - SCALE_STEP}%`;
    hiddenScale.value = `${Number(hiddenScale.value) - SCALE_STEP_HIDDEN_VALUE}`;
    imagePreview.style.transition = 'transform .2s ease';
    imagePreview.style.transform = `scale(${hiddenScale.value})`;
  }
};

const enlargeScale = () => {
  if (hiddenScale.value !== MAX_SCALE_VALUE) {
    scaleValue.value = `${parseInt(scaleValue.value, 10) + SCALE_STEP}%`;
    hiddenScale.value = `${Number(hiddenScale.value) + SCALE_STEP_HIDDEN_VALUE}`;
    imagePreview.style.transition = 'transform .2s ease';
    imagePreview.style.transform = `scale(${hiddenScale.value})`;
  }
};

scaleControl.addEventListener('click', (evt) => {
  if (evt.target === scaleSmaller) {
    reduceScale();
  }

  if (evt.target === scaleBigger) {
    enlargeScale();
  }
});

export {setDefaultScale, imagePreview};
