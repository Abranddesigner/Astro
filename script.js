// Banner slider auto play
let slideIndex = 0;
const slides = document.querySelectorAll(".banner-slider .slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

setInterval(nextSlide, 4000);
showSlide(slideIndex);

// Testimonial auto scroll
let testimonialIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");

function rotateTestimonials() {
  testimonials.forEach((t, i) => {
    t.classList.remove("active");
    if (i === testimonialIndex) t.classList.add("active");
  });
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

setInterval(rotateTestimonials, 3500);
rotateTestimonials();
