/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll('.nav__link');

function removeMenu() {
  navMenu.classList.remove('show-menu');
}
navLinks.forEach((link) => link.addEventListener('click', removeMenu));

/*==================== ACCORDION SKILLS ====================*/
const skillsHeader = document.querySelector('.skills__header');
const skillContent = document.querySelector('.skills__content');
skillsHeader.addEventListener('click', () => {
  skillContent.classList.toggle('skills__close');
});

/*==================== QUALIFICATION TABS ====================*/

const eduBtn = document.querySelector('#education-btn');
const courBtn = document.querySelector('#courses-btn');
const educationContent = document.getElementById('education');
const coursesContent = document.getElementById('courses');

eduBtn.addEventListener('click', () => {
  coursesContent.classList.remove('qualification__active');
  if (!educationContent.classList.contains('qualification__active')) {
    educationContent.classList.add('qualification__active');
  }
  courBtn.classList.remove('qualification__active');
  eduBtn.classList.add('qualification__active');
});

courBtn.addEventListener('click', () => {
  educationContent.classList.remove('qualification__active');
  if (!coursesContent.classList.contains('qualification__active')) {
    coursesContent.classList.add('qualification__active');
  }
  courBtn.classList.add('qualification__active');
  eduBtn.classList.remove('qualification__active');
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio__container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
  const nav = document.getElementById('header');
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

/*==================== Music ====================*/

let music = new Audio('music/Herbal_Tea.mp3');

console.log(music);
const playBtn = document.querySelector('.uil-play');
const pauseBtn = document.querySelector('.uil-pause');

playBtn.addEventListener('click', () => {
  music.play();
  music.volume = 0.05;
  playBtn.classList.remove('active');
  pauseBtn.classList.add('active');
});

pauseBtn.addEventListener('click', () => {
  music.pause();
  playBtn.classList.add('active');
  pauseBtn.classList.remove('active');
});
