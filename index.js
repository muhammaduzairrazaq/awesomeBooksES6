import {
  addMenuToggle,
  showContent,
} from './modules/nav-bar.js';

import { Library } from './modules/library.js';

import {updateTime } from './modules/date.js';

// eslint-disable-next-line no-unused-vars
const library = new Library();
addMenuToggle();
showContent();
updateTime();
setInterval(updateTime, 1000);