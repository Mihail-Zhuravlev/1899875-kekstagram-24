const bigPicture = document.querySelector('.big-picture ');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentTemplate = document.querySelector('#social-comment').content.querySelector('.social__comment');
let socialCommentFragment = document.createDocumentFragment();
const socialCaption = document.querySelector('.social__caption');
// const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const pictureCancel = document.querySelector('#picture-cancel');
const body = document.querySelector('body');
const MAX_COMMENTS_SHOW = 5;
const commentsCountNumber = bigPicture.querySelector('.comments-count--number');
const escapeKey = (evt) => evt.key === 'Escape';
const commentLoaded = bigPicture.querySelector('.comments-loader');
const closedBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialComments.innerHTML = '';

};
const onClosedBigPictureClick = () => {
  pictureCancel.addEventListener('click', (evt) => {
    evt.preventDefault();
    closedBigPicture();

  });
};
const onCloseEscapeKeydown = function(evt) {
  if (escapeKey(evt)) {
    evt.preventDefault();
    closedBigPicture();
  }
};

const showComments = () => {
  const commentsHidden = socialComments.querySelectorAll('.social__comment.hidden');
  const comentsArray =  Array.from(commentsHidden);
  const commentShow = comentsArray.slice(0, MAX_COMMENTS_SHOW);
  commentShow.forEach((comment) => comment.classList.remove('hidden'));
  const allCommnets = socialComments.querySelectorAll('.social__comment');
  const allOpenedComments = socialComments.querySelectorAll('.social__comment:not(.hidden)');
  commentsCountNumber.textContent = allOpenedComments.length;

  if (allCommnets.length === allOpenedComments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};
document.removeEventListener('keydown', onCloseEscapeKeydown);
function renderBigPicture(picture) {

  bigPicture.classList.remove('hidden');
  bigPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comment.length;

  picture.comment.forEach((comment) => {

    socialCommentFragment = socialCommentTemplate.cloneNode(true);
    socialCommentFragment.classList.add('hidden');
    socialCommentFragment.querySelector('.social__picture').src = comment.avatar;
    socialCommentFragment.querySelector('.social__picture').alt = comment.name;
    socialCommentFragment.querySelector('.social__text').textContent = comment.message;
    socialComments.appendChild(socialCommentFragment);
  });

  socialCaption.textContent = picture.description;
  // socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onCloseEscapeKeydown);
  showComments();
}


export { onClosedBigPictureClick, renderBigPicture, escapeKey, body, commentLoaded, showComments};

