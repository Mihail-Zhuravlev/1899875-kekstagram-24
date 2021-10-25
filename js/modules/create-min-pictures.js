import { renderBigPicture } from './create-big-pictures.js';
const minPicturesTemlate = document.querySelector('#picture').content;

const pictures =  document.querySelector('.pictures');

const creareMinPicture = (post) => {
  const clonePicturies = minPicturesTemlate.cloneNode(true);
  const pictureComments = clonePicturies.querySelector('.picture__comments');
  const likesCount = clonePicturies.querySelector('.picture__likes');
  const image = clonePicturies.querySelector('.picture__img');
  const link = clonePicturies.querySelector('.picture');
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    renderBigPicture(post);
  });
  image.src = post.url;
  pictureComments.textContent = post.comment.length;
  likesCount.textContent = post.likes;

  return clonePicturies;
};


const creareMinPictures = (posts) => {

  const postsTemplate = document.createDocumentFragment();
  posts.forEach( (post) => {
    const picture = creareMinPicture(post);
    postsTemplate.appendChild(picture);
  });

  pictures.appendChild(postsTemplate);

  return pictures.querySelectorAll('.picture');
};

export { creareMinPictures };
