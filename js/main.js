
import {getPost} from './modules/get-posts.js';
import {creareMinPictures} from './modules/create-min-pictures.js';
import {onClosedBigPictureClick, onOpenBigPictureClick} from './modules/create-big-pictures.js';


const COUNT_POSTS = 19;
const dataPosts = getPost(COUNT_POSTS);
creareMinPictures(dataPosts);
// console.log(dataPosts)


onClosedBigPictureClick();
const images = document.querySelectorAll('.picture');

onOpenBigPictureClick(images, dataPosts);
