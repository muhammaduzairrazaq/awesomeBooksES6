export const menuToggle = document.querySelector('.menu-toggle');
export const navLinks = document.querySelector('.nav-links');
export const s1 = document.querySelector('.section1');
export const s2 = document.querySelector('.section2');
export const s3 = document.querySelector('.section3');

export function addMenuToggle() {
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});
}

// eslint-disable-next-line no-unused-vars
export function showContent(c) {
  alert('i am running......')
  if (c === 'section1') {
    s1.classList.remove('display-content');
    s2.classList.add('display-content');
    s3.classList.add('display-content');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  } else if (c === 'section2') {
    s2.classList.remove('display-content');
    s1.classList.add('display-content');
    s3.classList.add('display-content');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  } else if (c === 'section3') {
    s3.classList.remove('display-content');
    s2.classList.add('display-content');
    s1.classList.add('display-content');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  }
}
