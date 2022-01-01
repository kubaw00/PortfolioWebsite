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
const skillsHedaer = document.querySelector('.skills__header');
const skillContent = document.querySelector('.skills__content');
skillsHedaer.addEventListener('click', () => {
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

/*==================== SERVICES MODAL ====================*/

/*==================== PORTFOLIO SWIPER  ====================*/

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
