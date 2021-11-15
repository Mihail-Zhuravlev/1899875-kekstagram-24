import { getRandomPositiveInteger , getRandomElement } from './util.js';
import {  descriptions, comments, names } from './data.js';

const generateData = (num, functionGenerate) => {
  const arrayObjects = [];

  for (let index = 1; index <= num; index++) {
    arrayObjects.push(functionGenerate(index));
  }
  return arrayObjects;
};


const getCommets = function() {
  return {
    id: getRandomPositiveInteger(15, 200),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomElement(comments),
    name: getRandomElement(names),
  };
};

const postObject = [];
const getPost = function(objCount) {
  for(let index = 1; index <= objCount; index++) {
    const necessarySumObjects = getRandomPositiveInteger(1, 30);
    const randomObj = {
      id: index,
      url: `photos/${index}.jpg`,
      description: getRandomElement(descriptions),
      likes: getRandomPositiveInteger(15, 200),
      comment : generateData(necessarySumObjects, getCommets),
    };
    postObject.push(randomObj);
  }
  return postObject;
};

export {getPost};
