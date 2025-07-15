let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
setInterval(() => {
  slideIndex = (slideIndex + 1) % totalSlides;
  slides.style.transform = "translateX(" + -slideIndex * 100 + "%)";
}, 4000);

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
