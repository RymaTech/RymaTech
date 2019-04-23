window.onscroll = () => {
  const nav = document.getElementsByClassName('ul-container')[0];
  if (this.scrollY <= 10) {
    nav.style.backgroundColor = 'hsla(0, 0%, 0%, 0)';
  } else {
    nav.style.backgroundColor = 'hsla(0, 0%, 0%, 1)';
    nav.style.transition = 'background-color 1.5s ease-out';
  }
};
