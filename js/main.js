import {getRandomPositiveInteger} from './utils/get-random-positive-integer.js';

//Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// const getRandomArbitrary = (min, max) => {
//   if(min >= 0 && max >= 0 && min < max) {
//     return console.log(parseInt(Math.random() * (max - min) + min))
//   }
//   else if(min > max){
//     return console.log(' число от начало диапазона не должно превышать или равняться числу конца диапазона!');
//   }
//   return  console.log('число от начало диапазона и число конца диапазона не должны быть меньше нуля!');
// };
// const watchLengthString = (value, stringLanght) => {
//   if(value.length <= stringLanght) {
//     return console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// const textRandom = 'какой то текст';
// watchLengthString(textRandom, 140);

let photos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ,16, 17, 18, 19, 20, 21, 22, 23, 24 ,25]
let descriptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ,16, 17, 18, 19, 20, 21, 22, 23, 24 ,25]
let comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

let names = ['Артем', 'Андрей', 'Сергей', 'Николай', 'Евгений', ]

Array.prototype.getRandomElement = function () {
  return this[Math.floor(Math.random() * this.length)];
};

let getPost = function() {
  return{
    id: getRandomPositiveInteger(1, 25),
    url:'photos/' + photos.getRandomElement(descriptions) + '.jpg',
    description: descriptions.getRandomElement(),
    likes: getRandomPositiveInteger(15, 200),
    comment : {
      id: getRandomPositiveInteger(15, 200),
      avatar: 'img/avatar-' + getRandomPositiveInteger(1, 6) + '.svg',
      message: comments.getRandomElement(),
      name: names.getRandomElement(),
      }
   }
}

const similPost = Array.from({length: 25},  getPost)
console.log(similPost)





