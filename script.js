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
const languageBtns = document.querySelector(".language__buttons");
const serviceCards = document.querySelectorAll(".service__data");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".modal__close");
const portfolios = document.querySelector(".portfolio__container");

const data = {
  en: {
    navAbout: "About",
    navSkills: "Skills",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navContact: "Contact",
    welcome: "I am",
    name: "Bence",
    profession: "Web Developer",
    aboutSubtitle: "Some information",
    aboutTitle: "About Me",
    aboutDescription1:
      "My name is Bence Botár and I live in Budapest. As a professional musician, my work environment was highly affected by the pandemic and restrictions, so I had to reconsider my future career and possibilities. I’ve always been interested in the creative and challenging tasks, that is why I decided to start learning web development.",
    aboutDescription2:
      "In the spring of 2020, I participated in the GreenFox Academy's 'MyFirstApp Coding' bootcamp. After that I successfully completed the 'Redesign Program' supported by the Hungarian state, which aimed to teach basic digital, IT skills and to provide insights about the basics of programming and website building. In parallel I continuously educated myself in the freeCodeCamp and Udemy online web development courses.",
    aboutDescription3:
      "My goal is to implement projects where I can apply the knowledge I have gained in practice.",
    aboutExperience: "Years of Experience",
    aboutProjects: "Projects",
    skillsSubtitle: "Here are my",
    skillsTitle: "Skills",
    skillTitle: "Professional Knowledge",
    skillText: "sdfasdfnasdflas",
    qualificationsSubtitle: "Experience and Education",
    qualificationsTitle: "Qualifications",
    workTitle: "Work Experience",
    educationTitle: "Education",
    servicesSubtitle: "What I offer",
    servicesTitle: "Services",
    serviceButton: "Know More",
    uiuxTitle: "UI/UX Design",
    uiuxDescription: "dfgsdfgdsfgd",
    webdevTitle: "Web Development",
    webdevDescription: "fgsdfgdfsgdf",
    graphicDesignTitle: "Graphic Design",
    graphicDesignDescription: "Coming Soon",
    projectTitle: "Project in Mind",
    projectDescription: "Contact me if you have an idea",
    projectButton: "Hire Me",
    portfoliosSubtitle: "My recent work",
    portfoliosTitle: "Portfolio",
    portfolioNavAll: "All",
    portfolioDetailsButton: "View Details",
    testimonialSubtitle: "Client reviews",
    testimonialTitle: "Testimonial",
    cpntactsSubtitle: "Feel free to",
    contactsTitle: "Contact Me",
    location: "Location",
    locationPlace: "Budapest, Hungary",
    phone: "Phone",
    chat: "Chat",
    footerDescription: "Hope I hear from you soon",
    contactButton: "Send Message",
  },
  hu: {
    navAbout: "Rólam",
    navSkills: "Szakértelem",
    navServices: "Szolgáltatás",
    navPortfolio: "Portfólió",
    navContact: "Kapcsolat",
    welcome: "Botár",
    name: "Bence",
    profession: "Web Fejlesztő",
    aboutSubtitle: "Egy kis információ",
    aboutTitle: "Rólam",
    aboutDescription1:
      "Botár Bence vagyok és Budapesten élek. Professzionális zenészként eltöltött 20 év után, a 2020/21-es pandémia okozta korlátozások alatt kezdtem új kihívásokat keresni. Mindig is érdekeltek a kreatív, építő, alkotó és elgondolkodtató feladatok, ezért döntöttem úgy, hogy belevágok a webfejlesztésbe.",
    aboutDescription2:
      "2020 tavaszán részt vettem a GreenFox Academy több hetes „MyFirstApp Coding” tréningjén, sikeresen elvégeztem 2020 nyarán a magyar állam által támogatott „Újratervezés programot”, illetve mindezzel párhuzamosan folyamatosan képeztem magam a freeCodeCamp és Udemy online webfejlesztői kurzusain.",
    aboutDescription3:
      "Célom, olyan projektek megvalósítása, ahol az eddig megszerezett tudásomat alkalmazhatom és gyarapíthatom a gyakorlatban.",
    aboutExperience: "Éves tapasztalat",
    aboutProjects: "Projektek",
    skillsSubtitle: "",
    skillsTitle: "Szakértelem",
    skillTitle: "Szaktudás",
    skillText: "sdfasdfnasdflas",
    qualificationsSubtitle: "Tapasztalat és képesítés",
    qualificationsTitle: "Qualifications",
    workTitle: "Munkatapasztalat",
    educationTitle: "Képzések",
    servicesSubtitle: "Amit nyújtok",
    servicesTitle: "Szolgáltatások",
    serviceButton: "Tudj meg többet",
    uiuxTitle: "UI/UX Design",
    uiuxDescription: "dfgsdfgdsfgd",
    webdevTitle: "Web Fejlesztés",
    webdevDescription: "fgsdfgdfsgdf",
    graphicDesignTitle: "Graphic Design",
    graphicDesignDescription: "Hamarosan",
    projectTitle: "Ha van egy ötleted...",
    projectDescription: "Lépj velem kapcsolatba.",
    projectButton: "Írj nekem",
    portfoliosSubtitle: "Legutóbbi munkáim",
    portfoliosTitle: "Portfólió",
    portfolioNavAll: "Mind",
    portfolioDetailsButton: "Reszletek",
    testimonialSubtitle: "Rólam írták",
    testimonialTitle: "Visszajelzések",
    contactsSubtitle: "Feel free to",
    contactsTitle: "Kapcsolat",
    location: "Helyszín",
    locationPlace: "Budapest, Magyarország",
    phone: "Telefon",
    chat: "Üzenet",
    footerDescription: "Hope I hear from you soon",
    contactButton: "Küldés",
  },
  skills: {
    html: { name: "HTML5", level: 90 },
    css: { name: "CSS3", level: 80 },
    javascript: { name: "JavaScript", level: 75 },
    uxui: { name: "UX/UI", level: 85 },
    react: { name: "React/Redux", level: 65 },
  },
  portfolios: {
    bassdoktor: {
      type: "Web Development",
      img: "./img/bassdoktor.png",
      title: "Bassdoktor",
      technologies: "React",
      year: 2021,
      url: "https://bassdoktor.herokuapp.com",
    },
  },
};

// SHOW MENU

const showMenu = () => {
  navMenu.classList.toggle("nav__menu--show");
};
hamburger.addEventListener("click", showMenu);

// ACTIVE LINK

const linkAction = () => {
  navMenu.classList.remove("nav__menu--show");
};
navLinks.forEach((link) => link.addEventListener("click", linkAction));

// SCROLL TO LINK

// const scrollActive = () => {
//   const scrollY = window.pageYOffset;
//   sections.forEach((section) => {
//     if (!section.hasAttribute("id")) return;
//     const sectionHeight = section.offsetHeight;
//     const sectionTop = section.offsetTop - 50;

//     sectionId = section.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(`.nav__menu a[href*=${sectionId}]`)
//         .classList.add("active-link");
//     } else {
//       document
//         .querySelector(`.nav__menu a[href*=${sectionId}]`)
//         .classList.remove("active-link");
//     }
//   });
// };
// window.addEventListener("scroll", scrollActive);

const scrollActive2 = () => {
  sections.forEach((section) => {
    if (!section.hasAttribute("id")) return;

    const setActiveSection = (entries, observer) => {
      const [entry] = entries;
      let sectionId = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        document
          .querySelector(`.nav__link[href*=${sectionId}`)
          .classList.add("active-link");
      } else {
        document
          .querySelector(`.nav__link[href*=${sectionId}`)
          .classList.remove("active-link");
      }
    };
    const sectionObserver = new IntersectionObserver(setActiveSection, {
      root: null,
      threshold: 0.5,
    });
    sectionObserver.observe(section);
  });
};
window.addEventListener("scroll", scrollActive2);
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
const parralaxEffect = () => {
  let scrollY = window.pageYOffset;
  home.style.backgroundPositionY = `${scrollY * 0.7}px`;
};
window.addEventListener("scroll", parralaxEffect);

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

let isDarkModeOn = false;
const toggleDarkMode = () => {
  isDarkModeOn = !isDarkModeOn;
  document.body.classList.toggle("dark-theme");
  screenmode.innerHTML = isDarkModeOn
    ? `<span class="sun"><i class="fas fa-sun"></i></span>`
    : `<span class="sun"><i class="far fa-moon"></i></span>`;
};
screenmode.addEventListener("click", toggleDarkMode);

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
  const markup = Object.values(data.skills)
    .map((skill, i) => {
      return `
            <div class="skill__data skill__hidden" style="transition: all 0.4s ${
              1 + i * 0.2
            }s" >
            <div class="skill__names">
            <i class="fab fa-html5 skill__icon"></i>
            <span class="skill__name">${skill.name}</span>
            </div>
            <div class="skill__bar" style="width:${skill.level}%;">
            </div>
            <div>
            <span class="skill__percentage">${skill.level}%</span>
            </div>
            </div>`;
    })
    .join("");
  skills.innerHTML = markup;
};
createSkills();

// REVEAL SKILLS

const revealSkills = (entries, observer) => {
  [entry] = entries;
  if (!entry.isIntersecting) return;
  [...entry.target.children].forEach((skill) =>
    skill.classList.remove("skill__hidden")
  );

  observer.unobserve(entry.target);
};

const skillsObserver = new IntersectionObserver(revealSkills, {
  root: null,
  threshold: 0.1,
});

skillsObserver.observe(skills);

// SERVICE CARD CLICK

const flipCard = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("service__button")) {
    e.target.closest(".card__container").classList.add("card--clicked");
  } else {
    e.target
      .closest(".service__data")
      .children[0].classList.remove("card--clicked");
  }
};
serviceCards.forEach((card) => card.addEventListener("click", flipCard));

// PORTFOLIO LIST

const showPortfolio = () => {
  const markup = Object.entries(data.portfolios)
    .map((portfolio) => {
      return `
            <div class="portfolio__content">
            <a href="${portfolio[1].url}" target="_blank"><img src="${portfolio[1].img}" class="portfolio__img" alt=""></a>
            <div class="portfolio__data">
            <span class="portfolio__subtitle">${portfolio[1].type}</span>
            <h2 class="portfolio__title">${portfolio[1].title}</h2>
            <button class="button button-link" id=${portfolio[0]} data-key="portfolioDetailsButton">View Details</button>
            </div>
            </div>`;
    })
    .join("");

  portfolios.innerHTML = markup;
};
showPortfolio();

// SHOW PORTFOLIO MODAL

const openModal = (e) => {
  e.preventDefault();
  modal.classList.remove("modal--hidden");
  overlay.classList.remove("modal--hidden");
  const currentPortfolio = data.portfolios[e.target.id];
  modal.children[1].innerHTML = `
          <img src="${currentPortfolio.img}"></img>
          <div>
          <h3>${currentPortfolio.title}'s website</h3>
          <p>Technologies: ${currentPortfolio.technologies}</p>
      <p>Year: ${currentPortfolio.year}</p>
      <p>url: <a href="${currentPortfolio.url}">${currentPortfolio.url}</a></p>
      </div>`;
};

const closeModal = () => {
  modal.classList.add("modal--hidden");
  overlay.classList.add("modal--hidden");
};

const portfolioDetailsBtns = document.querySelectorAll(".button-link");
portfolioDetailsBtns.forEach((button) => {
  button.addEventListener("click", openModal);
});

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// CHANGE LANGUAGE

const textElements = document.querySelectorAll("[data-key]");
const setLanguage = (language) => {
  textElements.forEach((element) => {
    let text = element.dataset.key;
    element.textContent = data[language][text];
  });
};
setLanguage("en");

const changeLanguage = (e) => {
  let language = e.target.dataset.lang;
  setLanguage(language);
  [...languageBtns.children].forEach((el) =>
    el.classList.remove("language__active")
  );
  e.target.classList.add("language__active");
};
languageBtns.addEventListener("click", changeLanguage);
