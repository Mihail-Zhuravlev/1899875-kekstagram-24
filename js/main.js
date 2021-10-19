import {getPosts} from './modules/get-posts.js';
import {creareMinPictures} from './modules/create-min-pictures.js';


const COUNT_POSTS = 25;

const dataPosts = getPosts(COUNT_POSTS);

creareMinPictures(dataPosts);
