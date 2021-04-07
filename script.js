const nav = document.querySelector(".nav");
const logo = document.querySelector(".nav__logo");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const navLinks = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("section[id]");
const header = document.querySelector(".header");
const scrollTop = document.querySelector(".scroll__top");
const about = document.querySelector(".about");
const footerDate = document.querySelector(".date");

// SHOW MENU
const showMenu = () => {
  if ((nav, hamburger)) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("nav__menu--show");
    });
  }
};
showMenu();

// ACTIVE LINK
const linkAction = () => {
  navMenu.classList.remove("nav__menu--show");
};
navLinks.forEach((link) => link.addEventListener("click", linkAction));

// SCROLL TO LINK
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// CHANGE HEADER BACKGROUND
function scrollHeader() {
  const sectionTop = about.offsetTop;

  if (this.scrollY >= sectionTop) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL TOP
function scrollToTop() {
  const sectionTop = about.offsetTop;
  if (this.scrollY >= sectionTop) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollToTop);

// DATE
const date = new Date();
footerDate.textContent = date.getFullYear();
