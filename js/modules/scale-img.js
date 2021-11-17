const SCALE_STEP = 25;
const scaleButtons = document.querySelectorAll('.scale__control');
const scaleControlValue = document.querySelector('.scale__control--value');
const hiddenScale = document.querySelector('#hidden-scale');
const imagePreview = document.querySelector('.img-upload__preview img');

const setDefaultScale = () => {
  scaleControlValue.value = '100%';
  hiddenScale.value = 1;
  imagePreview.style.transform = `scale(${hiddenScale.value})`;
  // imagePreview.style.transition = 'transform .2s ease';
};

const reduceScale = () => {
  if (hiddenScale.value > 0.25) {
    scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) - SCALE_STEP}%`;
    hiddenScale.value = `${Number(hiddenScale.value) - 0.25}`;
    imagePreview.style.transform = `scale(${hiddenScale.value})`;
    imagePreview.style.transition = 'transform .2s ease';
  }
};

const enlargeScale = () => {
  if (hiddenScale.value < 1) {
    scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) + SCALE_STEP}%`;
    hiddenScale.value = `${Number(hiddenScale.value) + 0.25}`;
    imagePreview.style.transform = `scale(${hiddenScale.value})`;
    imagePreview.style.transition = 'transform .2s ease';
  }
};

scaleButtons.forEach((scaleButton) => {
  scaleButton.addEventListener('click', () => {
    if(scaleButton.classList.contains('scale__control--smaller')) {
      reduceScale();
    }
    if(scaleButton.classList.contains('scale__control--bigger')) {
      enlargeScale();
    }
  });
});

export {setDefaultScale, imagePreview};
