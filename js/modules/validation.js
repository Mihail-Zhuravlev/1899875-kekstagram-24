
const imgForm = document.querySelector('.img-upload__form');
const hashtagsInput = document.querySelector('.text__hashtags');
const textArea = document.querySelector('.text__description');
const textAreaMaxLength = 140;

hashtagsInput.addEventListener('input', () => {
  const value = hashtagsInput.value;
  const hashtagsRegExp = /(^#[A-Za-zА-Яа-яЁё0-9]{1,19})$/;
  const hashArray= value.split(' ');
  const filteredArr = [...new Set(hashArray)];

  for (let hashArrI = 0; hashArrI < hashArray.length; hashArrI++) {
    if (hashArray.length > filteredArr.length) {
      hashtagsInput.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
    } else if (hashArray.length > 5) {
      hashtagsInput.setCustomValidity('Не может быть больше 5 хэштэгов');
    } else if (hashtagsRegExp.test(hashArray[hashArrI]) === false) {
      hashtagsInput.setCustomValidity('Хэштэг начинается с # и должен содержать не больше 20 символов');
    } else {
      hashtagsInput.setCustomValidity('');
    }
  }

  hashtagsInput.reportValidity();

});
textArea.addEventListener('input', () => {
  const valueLength = textArea.value.length;

  if (valueLength > textAreaMaxLength) {
    textArea.setCustomValidity('Введите не больше 140 символов');
  } else {
    textArea.setCustomValidity('');
  }
  textArea.reportValidity();
});

const setImgFormSubmit = () => {
  imgForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
};


export {setImgFormSubmit};
