document.addEventListener("DOMContentLoaded", () => {
  // Carrusel automático accesible
  const slides = document.querySelector(".slides");
  const slideElements = document.querySelectorAll(".slide");
  const totalSlides = slideElements.length;
  let slideIndex = 0;

  if (slides && totalSlides > 0) {
    setInterval(() => {
      slideIndex = (slideIndex + 1) % totalSlides;
      slides.style.transform = `translateX(${-slideIndex * 100}%)`;
    }, 4000);
  }

  // Menú hamburguesa accesible
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = nav.classList.toggle("active");
      toggle.setAttribute("aria-expanded", expanded);
    });
  }
});
