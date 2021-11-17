const uploadPreviewImg = document.querySelector('.img-upload__preview img');
const effectsPreviews = document.querySelectorAll('.effects__preview');
const getLoadingFile = (fileCreate) => {
  const file = fileCreate.files[0];
  uploadPreviewImg.src = URL.createObjectURL(file);
  effectsPreviews.forEach((effectsPreview) => {
    effectsPreview.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
  });
};

export {getLoadingFile};
