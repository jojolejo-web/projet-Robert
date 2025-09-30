const header = document.querySelector("header");
const nav = document.querySelector("nav");

const scrollThreshold = 50;

const toggleNavClass = () => {
  if (window.scrollY > scrollThreshold) {
    nav.classList.add("navScroll");
    header.classList.add("headerTranslate");
  } else {
    nav.classList.remove("navScroll");
    header.classList.remove("headerTranslate");
  }
};
window.addEventListener("scroll", toggleNavClass);
