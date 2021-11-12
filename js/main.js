
import {getPost} from './modules/get-posts.js';
import {creareMinPictures} from './modules/create-min-pictures.js';
import {onClosedBigPictureClick} from './modules/create-big-pictures.js';
import {setImgFormSubmit} from './modules/validation.js';
import './modules/photo-upload.js';
const COUNT_POSTS = 19;
const dataPosts = getPost(COUNT_POSTS);
creareMinPictures(dataPosts);
onClosedBigPictureClick();

setImgFormSubmit();
