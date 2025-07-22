document.addEventListener("DOMContentLoaded", () => {
  // Carrusel automático
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  let slideIndex = 0;

  setInterval(() => {
    slideIndex = (slideIndex + 1) % totalSlides;
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
  }, 4000);

  // Menú hamburguesa
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  toggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});
