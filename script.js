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
const skills = document.querySelector(".skills__container");
const hu = document.querySelector(".hu");
const en = document.querySelector(".en");
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
  threshold: 0.2,
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

// CREATE SKILLS

const createSkills = () => {
  const markup = `<div class="skills__data">
  <div class="skills__names">
    <i class="fab fa-html5 skills__icon"></i>
    <span class="skills__name">HTML5</span>
  </div>
  <div class="skills__bar skills__html">
  </div>
  <div>
    <span class="skills__percentage">90%</span>
  </div>
</div>`;
  skills.innerHTML = markup;
};
// createSkills();

// CHANGE LANGUAGE

let currentLanguage = "en";

const text = [
  ["About", "Rólam"],
  ["Skills", "Szakértelem"],
  ["Services", "Szolgáltatás"],
  ["Portfolio", "Portfólió"],
  ["Contact", "Kapcsolat"],
  ["I am", "Bence"],
  ["Bence", "vagyok,"],
  ["Web Developer", "Webfejlesztő"],
  ["My history", "Egy kis info"],
  ["About Me", "Rólam"],
  ["Years of Experience", "év tapasztalat"],
  ["Projects", "Projektek"],
  ["Competence", "Kompetenciák"],
  ["Skills", "Szakértelem"],
  ["Professional Skills", "Ismert nyelvek"],
  ["Lorem ipsum dolor sit.", "asfgsdgsdfgsdfgsdfgsdfgsdfgsdfgd"],
  ["Experience and Education", "Tapasztalat és képzés"],
  ["Qualifications", "Kvalifikációk"],
  ["Work Experience", "Munkahelyek"],
  ["Junior Front End Developer", "Junior Front End Developer"],
  ["UI/UX Designer", "UI/UX Designer"],
  ["Education", "Képzések"],
  ["Online Course", "Online Course"],
  ["What I offer", "Amit nyújtok"],
  ["Services", "Szolgáltatás"],
  ["UI/UX Design", "UI/UX Design"],
  ["asfgsdgsdfgsdfgsdfgsdfgsdfgsdfgd", "asfgsdgsdfgsdfgsdfgsdfgsdfgsdfgd"],
  ["Know More", "Tudj meg többet"],
  ["Web development", "Webfejlesztés"],
  ["asfgsdfsssfsffgsdfgsdfgsdfgd", "sssfsffgsdfgsdfg"],
  ["Graphic Design", "Grafikus design"],
  ["Coming Soon", "Hamarosan"],
  ["Projects in mind", "Milyen projekt jár a fejedben_"],
  ["Contact me if you would like your ideas to be implemented", "Jelentekzz"],
  ["Hire Me", "Fogadj fel"],
  ["My recents work", "Legutóbi munkáim"],
  ["All", "Mind"],
  ["Web development", "Webfejlesztés"],
  ["New portfolio", "Új portfolió"],
  ["View Details", "Részletek"],
  ["Client reviews", "Visszajelzések"],
  ["Testimonial", "Rólam mondták"],
  ["Client", "Kliens"],
  ["sdgagfeyegrjhntmjkmyynyhjbyhtybertverg", "rjhntmjkmyynyhjbyhtyb"],
  ["Feel free to", "Írj nekem"],
  ["Contact me", "Kapcsolat"],
  ["Location", "Helyszín"],
  ["Budapest, Hungary", "Budapest, MO"],
  ["Phone", "Telefon"],
  ["Chat", "Üzenet"],
  ["Hope I hear from you soon", "Remeéem írsz"],
];

const textElements = document.querySelectorAll(".txt");
const changeText = (language) => {
  if (language === currentLanguage) return;
  textElements.forEach((element) => {
    let index = currentLanguage === "en" ? 0 : 1;
    const findText = text.find(
      (el) => el[index] === element.textContent.trim()
    );
    index = index === 0 ? 1 : 0;
    element.textContent = findText[index];
  });
  currentLanguage = language;
};

hu.addEventListener("click", () => {
  changeText("hu");
  en.classList.remove("language__active");
  hu.classList.add("language__active");
});
en.addEventListener("click", () => {
  changeText("en");
  hu.classList.remove("language__active");
  en.classList.add("language__active");
});
