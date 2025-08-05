let currentSlide = 0;
const slides = document.querySelectorAll(".banner-slider .slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Change every 5 seconds

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});
