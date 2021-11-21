import {stringLenghtCheck, isEscapeKey, addBodyModalOpen, removeBodyModalOpen} from './utils.js';
import {setDefaultScale} from './scale.js';
import {setDefaultFilter} from './slider.js';
import {sendData} from './api.js';
import {renderSuccessMessage, renderErrorMessage} from './alert-message.js';

const MAX_HASHTAGS_NUMBER = 5;
const MAX_COMMENT_LENGTH = 140;
const HASHTAG_REGEX = /[~`!@_()$%^&*+=\-[\]\\';,./{}|\\":<>?]/g;
const MAX_LENGTH_HASHTAGS = 20;
const imageForm = document.querySelector('#upload-select-image');
const photoUploadOverlay = imageForm.querySelector('.img-upload__overlay');
const photoUploadForm = imageForm.querySelector('#upload-file');
const photoUploadFormClose = imageForm.querySelector('#upload-cancel');
const hashtagInput = imageForm.querySelector('.text__hashtags');
const descriptionInput = imageForm.querySelector('.text__description');

const checkDuplicates = (array) => (new Set(array)).size !== array.length;
const onHashtagInput = () => {
  hashtagInput.value = hashtagInput.value.replace(/\s+/g, ' ');
  const hashArray = hashtagInput.value.toLowerCase().split(' ');
  let error = '';

  hashArray.forEach((hash) => {
    if (!hash.startsWith('#')) {
      error = 'хеш-тег должен начинаться с решётки #';
    }

    if (hash === '#') {
      error = 'хеш-тег не может состоять только из одной решётки';
    }

    if (HASHTAG_REGEX.test(hash)) {
      error = 'хештег не может содержать пробелы, спецсимволы (@, $ и т. п.)';
    }

    if (hash.length > MAX_LENGTH_HASHTAGS) {
      error = `В хештеге не может быть больше ${MAX_LENGTH_HASHTAGS} символов`;
    }

    if (checkDuplicates(hashArray)) {
      error = 'хеш-теги не могут повторяться';
    }

    if (hashArray.length > MAX_HASHTAGS_NUMBER) {
      error = `не больше ${MAX_HASHTAGS_NUMBER} тегов`;
    }
  });

  if (!error) {
    hashtagInput.setCustomValidity('');
    hashtagInput.classList.remove('text__hashtags--error');
  } else if (hashArray[0] === '') {
    hashtagInput.setCustomValidity('');
    hashtagInput.classList.remove('text__hashtags--error');
    hashtagInput.value = hashtagInput.value.trim();
  } else {
    hashtagInput.setCustomValidity(error);
    hashtagInput.classList.add('text__hashtags--error');
  }
  hashtagInput.reportValidity();

};

const onDescriptionInput = () => {
  const description = descriptionInput.value;

  if (!stringLenghtCheck(description, MAX_COMMENT_LENGTH)) {
    descriptionInput.setCustomValidity(`Максимальное возможное количество символом ${MAX_COMMENT_LENGTH}, удалите ${description.length - MAX_COMMENT_LENGTH} символов`);
  } else {
    descriptionInput.setCustomValidity('');
  }

  descriptionInput.reportValidity();
};

const onPhotoEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadedImage();
  }
};

const openUploadedImage = () => {
  photoUploadOverlay.classList.remove('hidden');
  addBodyModalOpen();

  photoUploadFormClose.addEventListener('click', closeUploadedImage);

  setDefaultScale();
  setDefaultFilter();
  hashtagInput.addEventListener('input', onHashtagInput);
  descriptionInput.addEventListener('input', onDescriptionInput);
  document.addEventListener('keydown', onPhotoEscKeydown);
};


const closeUploadedImage = () => {
  photoUploadOverlay.classList.add('hidden');
  removeBodyModalOpen();
  photoUploadForm.value = '';
  hashtagInput.value = '';
  descriptionInput.value = '';
  hashtagInput.removeEventListener('input', onHashtagInput);
  descriptionInput.removeEventListener('input', onDescriptionInput);
  document.removeEventListener('keydown', onPhotoEscKeydown);
  photoUploadFormClose.removeEventListener('click', closeUploadedImage);
};

photoUploadForm.addEventListener('change', () => {
  openUploadedImage();
});

hashtagInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

descriptionInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

const setImageFormSubmit = (onSuccess) => {
  imageForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    sendData(
      () => renderSuccessMessage(),
      () => renderErrorMessage(),
      formData,
    );

    onSuccess();
  });
};

export {setImageFormSubmit, closeUploadedImage};
