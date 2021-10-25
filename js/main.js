
import {getPost} from './modules/get-posts.js';
import {creareMinPictures} from './modules/create-min-pictures.js';
import {onClosedBigPictureClick} from './modules/create-big-pictures.js';


const COUNT_POSTS = 19;
const dataPosts = getPost(COUNT_POSTS);
const images = creareMinPictures(dataPosts);


onClosedBigPictureClick();


