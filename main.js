document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  let slideIndex = 0;

  setInterval(() => {
    slideIndex = (slideIndex + 1) % totalSlides;
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
  }, 4000);

  const nav = document.getElementById("navLinks");
  document.querySelector(".menu-toggle").addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
