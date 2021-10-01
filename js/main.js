const getRandomArbitrary = (min, max) => {
  if(min >= 0 && max >= 0 && min < max) {
   return console.log(parseInt(Math.random() * (max - min) + min))
 }
 else if(min > max){
   return console.log(' число от начало диапазона не должно превышать или равняться числу конца диапазона!')
 }
 return  console.log('число от начало диапазона и число конца диапазона не должны быть меньше нуля!')
}
getRandomArbitrary(-1, 0);

const watchLengthString = (value, stringLanght) => {
  if(value.length <= stringLanght) {
   return console.log(true);
  }
    console.log(false)
}
let textRandom = 'какой то текст';
watchLengthString(textRandom, 140);
