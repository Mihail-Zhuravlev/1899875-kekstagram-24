const minPicturesTemlate = document.querySelector('#picture').content;
const image = minPicturesTemlate.querySelector('.picture__img');
const likesCount = minPicturesTemlate.querySelector('.picture__likes');
const pictureComments = minPicturesTemlate.querySelector('.picture__comments');
const pictures =  document.querySelector('.pictures');

const creareMinPicture = (post) => {
  image.src = post.url;
  pictureComments.textContent = post.comment.length;
  likesCount.textContent = post.likes;
  const clonePicturies = minPicturesTemlate.cloneNode(true);
  return clonePicturies;
};

const creareMinPictures = (posts) => {

  const postsTemplate = document.createDocumentFragment();
  console.log(postsTemplate)
  posts.forEach( (post) => {
    console.log(post)
    postsTemplate.appendChild(creareMinPicture(post))

  });
  pictures.appendChild(postsTemplate);
};

export { creareMinPictures };
