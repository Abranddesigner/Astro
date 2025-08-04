// ===== Banner Slider ===== //
let currentBanner = 0;
const banners = document.querySelectorAll(".banner-slider .slide");

function showBanner(index) {
  banners.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextBanner() {
  currentBanner = (currentBanner + 1) % banners.length;
  showBanner(currentBanner);
}

setInterval(nextBanner, 5000); // Change every 5 seconds

// ===== Testimonial Slider ===== //
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial-slider .testimonial");

function showTestimonial(index) {
  testimonials.forEach((item, i) => {
    item.classList.remove("active");
    if (i === index) item.classList.add("active");
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

setInterval(nextTestimonial, 4000); // Rotate every 4 seconds

// ===== Optional: Animate on Scroll (basic fade-in) ===== //
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.feature-boxes .box, .testimonial').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
