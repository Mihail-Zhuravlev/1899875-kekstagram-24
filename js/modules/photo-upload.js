import  {escapeKey, body} from './create-big-pictures.js';

const imgCploadCancel = document.querySelector('.img-upload__cancel');
const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay ');

uploadFile.addEventListener('change', () => {
  body.classList.add('modal-open');
  imgUploadOverlay.classList.remove('hidden');
});

const onCloseImageEscKeydown = (evt) => {

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
