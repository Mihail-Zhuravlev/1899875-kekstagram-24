import {imagePreview} from './scale-img.js';

const effectSlider = document.querySelector('.effect-level__slider');
const effectRadios = document.querySelectorAll('.effects__radio');
const effectList = document.querySelector('.effects__list');
const effectLevel = document.querySelector('.effect-level__value');
const imageOptions = {
  'none': {
    style: 'none',
    min: 0,
    max: 1,
    step: 0.01
    },
  'chrome': {
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.01
      },
  'sepia': { style: 'sepia',
    min: 0,
    max: 1,
    step: 0.01
    },
  'marvin': {
    style: 'invert',
    min: 0,
    max: 100,
    step: 1
    },
  'phobos': {
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.03
  },
  'heat': {
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.03
  },
};
let imageFilter = 'none';

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

const setFilter = (evt) => {
  if(evt.target.id === 'effect-none') {
    effectSlider.style.display = 'none';

  } else {
    effectSlider.style.display = 'block';
  }
  imageFilter = evt.target.value;

  imagePreview.className = `effects__preview--${imageFilter}`;
  effectSlider.noUiSlider.updateOptions({
    range: {
      min:imageOptions[imageFilter].min,
      max: imageOptions[imageFilter].max,
    },
    step: imageOptions[imageFilter].step,
    start: imageOptions[imageFilter].max,
  });

};

effectSlider.noUiSlider.on('update', (___, handle, values) => {
  const photoFilter = imageOptions[imageFilter].style;
  effectLevel.value = values[handle];
  if(imageFilter === 'chrome' || imageFilter === 'sepia'|| imageFilter === 'heat') {
    imagePreview.style.filter = `${photoFilter}(${values[handle]})`;
    return;
  }
 if (imageFilter === 'marvin') {
    imagePreview.style.filter = `${photoFilter}(${values[handle]}%)`;
    return;
  }
  if(imageFilter === 'phobos') {
    imagePreview.style.filter = `${photoFilter}(${values[handle]}px)`;
    return;
  }
    imagePreview.style.filter = '';
    effectLevel.value = '';
});

effectList.addEventListener('change', (evt) => {
  setFilter(evt);
});

const setDefaultFilter = () => {
  effectRadios.forEach((radioInput) => {
    if (radioInput.id === 'effect-none') {
      radioInput.setAttribute('checked', 'checked');
    }
    effectSlider.style.display = 'none';
    imagePreview.className = '';
    imagePreview.style = '';
  });
};

export {setDefaultFilter}
