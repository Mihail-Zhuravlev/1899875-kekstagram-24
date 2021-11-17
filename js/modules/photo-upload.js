import  {escapeKey, body} from './create-big-pictures.js';
import {textArea, hashtagsInput} from './validation.js';
import { setDefaultScale } from './scale-img.js';
import {setDefaultFilter} from './effect-slider.js';
import {getLoadingFile} from './loading-file.js';


const imgCploadCancel = document.querySelector('.img-upload__cancel');
const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay ');
textArea.addEventListener('focus', () => textArea.classList.add('text__description--focus'));
textArea.addEventListener('blur', () => textArea.classList.remove('text__description--focus'));
hashtagsInput.addEventListener('focus', () => hashtagsInput.classList.add('text__hashtags--focus'));
hashtagsInput.addEventListener('blur', () => hashtagsInput.classList.remove('text__hashtags--focus'));

uploadFile.addEventListener('change', () => {
  body.classList.add('modal-open');
  imgUploadOverlay.classList.remove('hidden');
  setDefaultScale();
  setDefaultFilter();
  getLoadingFile(uploadFile);


});

const onCloseImageEscKeydown = (evt) => {
  if(textArea.classList.contains('text__description--focus') || hashtagsInput.classList.contains('text__hashtags--focus') ) {
    return;
  }
  if (escapeKey(evt)) {
    evt.preventDefault();
    body.classList.remove('modal-open');
    imgUploadOverlay.classList.add('hidden');
    uploadFile.value = '';
  }
};

document.addEventListener('keydown', (evt) => {
  onCloseImageEscKeydown(evt);
});

imgCploadCancel.addEventListener('click', () => {

  body.classList.remove('modal-open');
  imgUploadOverlay.classList.add('hidden');
  uploadFile.value = '';
});

export {uploadFile};
