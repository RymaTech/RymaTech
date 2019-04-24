const menu = document.getElementsByClassName('menu')[0];
const menuCover = document.getElementsByClassName('menu-cover')[0];
const mobileNav = document.getElementsByClassName('mobile-nav');
console.log(mobileNav);
window.onscroll = () => {
  const nav = document.getElementsByClassName('ul-container')[0];
  if (this.scrollY <= 10) {
    nav.style.backgroundColor = 'hsla(0, 0%, 0%, 0)';
  } else {
    nav.style.backgroundColor = 'hsla(0, 0%, 0%, 1)';
    nav.style.transition = 'background-color 1.5s ease-out';
  }
};

menu.addEventListener('click', () => {
  menuCover.style.visibility = 'visible';
});

mobileNav.addEventListener('click', () => {
  if (menuCover.style.visibility === 'visible') {
    menuCover.style.visibility = 'hidden';
  }
});
