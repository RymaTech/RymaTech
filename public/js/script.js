const sideNav = document.getElementsByClassName("sidennav")[0];
const menu = document.getElementsByClassName("menu")[0];
const profileClick = document.getElementById("profileClick");
const projectsClick = document.getElementById("projectsClick");
const techStackClick = document.getElementById("techStackClick");
const ContactClick = document.getElementById("ContactClick");

window.onscroll = () => {
  const nav = document.getElementsByClassName("ul-container")[0];
  if (this.scrollY <= 10) {
    nav.style.backgroundColor = "hsla(0, 0%, 0%, 0)";
  } else {
    nav.style.backgroundColor = "hsla(0, 0%, 0%, 1)";
    nav.style.transition = "background-color 1.5s ease-out";
  }
};

const mobileNavFunctionality = () => {
  let count = true;
  let mobileArr = [
    menu,
    profileClick,
    projectsClick,
    techStackClick,
    ContactClick
  ];

  const controlMobileNavBar = () => {
    if (count) {
      document.getElementById("mySidenav").style.width = "250px";
      menu.src = "./public/images/x.png";
      count = false;
    } else {
      document.getElementById("mySidenav").style.width = "0";
      menu.src = "./public/images/menu.png";
      count = true;
    }
  };

  mobileArr.map(x => {
    x.addEventListener("click", () => {
      controlMobileNavBar();
    });
  });
};
mobileNavFunctionality();
