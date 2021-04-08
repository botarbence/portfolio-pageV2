const nav = document.querySelector(".nav");
const logo = document.querySelector(".nav__logo");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const navLinks = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("section");
const header = document.querySelector(".header");
const scrollTop = document.querySelector(".scroll__top");
const home = document.querySelector(".home");
const greeting = document.querySelector(".home__greeting");
const social = document.querySelector(".home__social");
const introduction = document.querySelector(".home__introduction");
const about = document.querySelector(".about");
const footerDate = document.querySelector(".date");
const screenmode = document.querySelector(".screen__mode");

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
    if (!section.hasAttribute("id")) return;
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

  if (this.scrollY >= sectionTop - 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL TOP
function scrollToTop() {
  const sectionTop = about.offsetTop;
  if (this.scrollY >= sectionTop - 50) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollToTop);

// DATE
const date = new Date();
footerDate.textContent = date.getFullYear();

// HOME PARRALAX
home.style.backgroundPositionY = 0;
window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;
  home.style.backgroundPositionY = `${scrollY * 0.7}px`;
});

// REVEAL SECTIONS
const revealSections = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.firstElementChild.classList.remove("hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.25,
});

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// DARK MODE
let screen = true;

screenmode.addEventListener("click", () => {
  screen = !screen;
  document.body.classList.toggle("dark-theme");
  screenmode.innerHTML = screen
    ? `<span class="sun"><i class="fas fa-sun"></i></span>`
    : `<span class="sun"><i class="far fa-moon"></i></span>`;
});

// LOAD PAGE

const init = () => {
  setTimeout(() => {
    greeting.classList.remove("greeting__hidden");
    social.classList.remove("social__hidden");
    introduction.classList.remove("introduction__hidden");
  }, 1000);
};

window.addEventListener("load", init);
