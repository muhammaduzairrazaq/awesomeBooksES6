import {
  addMenuToggle,
  showContent,
} from './modules/nav-bar.js';
import { Library } from './modules/library.js';

// eslint-disable-next-line no-unused-vars
const library = new Library();
addMenuToggle();
showContent();
