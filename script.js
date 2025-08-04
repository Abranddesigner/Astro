let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showSlide(index) {
  const offset = -index * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000);

// Testimonials auto scroll
let testimonialIndex = 0;
function rotateTestimonials() {
  const testimonialSlider = document.querySelector('.testimonial-slider');
  const testimonials = testimonialSlider.children;
  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = 'none';
  }
  testimonials[testimonialIndex].style.display = 'block';
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

setInterval(rotateTestimonials, 3000);
window.addEventListener('DOMContentLoaded', rotateTestimonials);
