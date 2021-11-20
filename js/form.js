import {stringLenghtCheck, isEscapeKey, addBodyModalOpen, removeBodyModalOpen} from './utils.js';
import {setDefaultScale} from './scale.js';
import {setDefaultFilter} from './slider.js';
import {sendData} from './api.js';
import {renderSuccessMessage, renderErrorMessage} from './alert-message.js';

const MAX_HASHTAGS_NUMBER = 5;
const MAX_COMMENT_LENGTH = 140;
const HASHTAG_REGEX = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const hashtagLength = 20;
const imageForm = document.querySelector('#upload-select-image');
const photoUploadOverlay = imageForm.querySelector('.img-upload__overlay');
const photoUploadForm = imageForm.querySelector('#upload-file');
const photoUploadFormClose = imageForm.querySelector('#upload-cancel');
const hashtagInput = imageForm.querySelector('.text__hashtags');
const descriptionInput = imageForm.querySelector('.text__description');

const onHashtagInput = () => {
  const hashtagsStrings = hashtagInput.value;
  const hashtags = hashtagsStrings.trim().split(' ');
  hashtagInput.setCustomValidity('');
  if (hashtags.length > MAX_HASHTAGS_NUMBER) {
    hashtagInput.setCustomValidity('Нельзя указать больше пяти хэш-тегов');
  }
  hashtags.forEach((hashtag) => {
    if(hashtag.startsWith('#') && hashtag.length === 1) {
      return hashtagInput.setCustomValidity('хеш-тег не может состоять только из одной решётки');
    }
    if(hashtag.length > hashtagLength) {
      return hashtagInput.setCustomValidity('максимальная длина одного хэш-тега 20 символов, включая решётку');
    }
    if(!hashtag.startsWith('#') && hashtag.length > 0) {
      return hashtagInput.setCustomValidity('хэш-тег начинается с символа # (решётка)');
    }
    if(!HASHTAG_REGEX.test(hashtag)) {
      return hashtagInput.setCustomValidity('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
    }
  });

  const uniqTags = new Set(hashtags.map((hashtag) => hashtag.toLowerCase()));
  if(uniqTags.size !== hashtags.length) {
    hashtagInput.setCustomValidity('один и тот же хэш-тег не может быть использован дважды');
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

  photoUploadFormClose.addEventListener('click', () => {
    closeUploadedImage();
  });

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

  photoUploadFormClose.removeEventListener('click', () => {
    closeUploadedImage();
  });

  hashtagInput.removeEventListener('input', onHashtagInput);
  descriptionInput.removeEventListener('input', onDescriptionInput);
  document.removeEventListener('keydown', onPhotoEscKeydown);
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
