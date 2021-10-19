import { getRandomPositiveInteger , getRandomElement } from './utils/get-random-positive-integer.js';

const photos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ,16, 17, 18, 19, 20, 21, 22, 23, 24 ,25];

const descriptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ,16, 17, 18, 19, 20, 21, 22, 23, 24 ,25];
const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = ['Артем', 'Андрей', 'Сергей', 'Николай', 'Евгений'];
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
console.log(similarPost);
