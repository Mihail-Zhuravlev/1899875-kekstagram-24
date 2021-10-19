import { getRandomPositiveInteger , getRandomElement } from './util.js';
import { photos, descriptions, comments, names } from './data.js';

const getPost = function() {
  return {
    id: getRandomPositiveInteger(1, 25),
    url: `photos/ + ${getRandomElement(photos)} + .jpg`,
    description: getRandomElement(descriptions),
    likes: getRandomPositiveInteger(15, 200),
    comment : {
      id: getRandomPositiveInteger(15, 200),
      avatar: `img/avatar- + ${getRandomPositiveInteger(1, 6)} + .svg`,
      message: getRandomElement(comments),
      name: getRandomElement(names),
    },
  };
};

const similarPost = Array.from({length: 25},  getPost);

export {similarPost};
