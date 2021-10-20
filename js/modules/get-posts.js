import { getRandomPositiveInteger , getRandomElement } from './util.js';
import { photos, descriptions, comments, names } from './data.js';


const generateData = (num, functionGenerate) => {
  const arrayObjects = [];

  for (let i = 1; i <= num; i++) {
    arrayObjects.push(functionGenerate(i));
  }
  return arrayObjects;
};


const getCommets = () => {
  return {
      id: getRandomPositiveInteger(15, 200),
      avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      message: getRandomElement(comments),
      name: getRandomElement(names),

  }
}

const getPost = function() {
  const necessarySumObjects = getRandomPositiveInteger(0, 6);
  return {
    id: getRandomPositiveInteger(1, 25),
    url: `photos/${getRandomElement(photos)}.jpg`,
    description: getRandomElement(descriptions),
    likes: getRandomPositiveInteger(15, 200),
    comment : generateData(necessarySumObjects, getCommets),
  };
};

const getPosts = (count) =>  Array.from({length: count},  getPost);

export {getPosts};
