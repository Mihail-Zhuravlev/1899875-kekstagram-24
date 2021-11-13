const bigPicture = document.querySelector('.big-picture ');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentTemplate = document.querySelector('#social-comment').content.querySelector('.social__comment');
let socialCommentFragment = document.createDocumentFragment();
const socialCaption = document.querySelector('.social__caption');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const pictureCancel = document.querySelector('#picture-cancel');

const body = document.querySelector('body');



const escapeKey = (evt) => evt.key === 'Escape';
const onCloseEscapeKeydown = function(evt) {
  if (escapeKey(evt)) {
    evt.preventDefault();
    closedBigPicture();
  }
};

const closedBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialComments.innerHTML = '';
  document.removeEventListener('keydown', onCloseEscapeKeydown);
};
const onClosedBigPictureClick = () => {
  pictureCancel.addEventListener('click', (evt) => {
    evt.preventDefault();
    closedBigPicture();
  });
};

function renderBigPicture(picture) {

  bigPicture.classList.remove('hidden');
  bigPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comment.length;

  picture.comment.forEach((comment) => {
    socialCommentFragment = socialCommentTemplate.cloneNode(true);
    socialCommentFragment.querySelector('.social__picture').src = comment.avatar;
    socialCommentFragment.querySelector('.social__picture').alt = comment.name;
    socialCommentFragment.querySelector('.social__text').textContent = comment.message;
    socialComments.appendChild(socialCommentFragment);
  });

  socialCaption.textContent = picture.description;
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onCloseEscapeKeydown);
}

export { onClosedBigPictureClick, renderBigPicture, escapeKey, body};

