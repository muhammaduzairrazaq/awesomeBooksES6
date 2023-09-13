import {
  addMenuToggle,
  showContent,
} from './modules/nav-bar.js';
import { Library } from './modules/library.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const updateTime = () => {
  const time = DateTime.now();
  const formattedTime = time.toFormat('LLL dd, yyyy, h:mm:ss a');
  document.getElementById('dateTime').textContent = formattedTime;
};

// eslint-disable-next-line no-unused-vars
const library = new Library();
addMenuToggle();
showContent();
updateTime();
setInterval(updateTime, 1000);