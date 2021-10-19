import { getRandomPositiveInteger , getRandomElement } from './util.js';
import { photos } from './data.js';

const minPicturesTemlate = document.querySelector('#picture').content;
const image = minPicturesTemlate.querySelector('.picture__img');
const likes = minPicturesTemlate.querySelector('.picture__likes');
const pictureComments = minPicturesTemlate.querySelector('.picture__comments');
const pictures =  document.querySelector('.pictures');


const creareCloneTemplate = () => {
  image.src = `photos/${getRandomElement(photos)}.jpg`;
  pictureComments.textContent = getRandomPositiveInteger(0,6);
  likes.textContent = getRandomPositiveInteger(10, 200);
  const clonePicturies = minPicturesTemlate.cloneNode(true);
  pictures.appendChild(clonePicturies);
};
const creareMinPictures = () => {
  for (let i = 0; i < photos.length; i++) {
    creareCloneTemplate();
  }
};

export { creareMinPictures };
