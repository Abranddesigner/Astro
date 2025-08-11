// ===== BANNER SLIDER =====
const bannerImages = document.querySelectorAll('.banner img');
const bannerText = document.querySelector('.banner-text');
const bannerTexts = [
  `<h2>ASTROLOGY EXPERT</h2><p>Love Problem Solution Expert</p><a href="tel:6350262865" class="btn call-btn">Call Now</a><a href="https://wa.me/6350262865" class="btn whatsapp-btn">WhatsApp</a>`,
  `<h2>ASTROLOGY EXPERT</h2><p>Love Marriage Specialist</p><a href="tel:6350262865" class="btn call-btn">Call Now</a><a href="https://wa.me/6350262865" class="btn whatsapp-btn">WhatsApp</a>`,
  `<h2>ASTROLOGY EXPERT</h2><p>Husband Wife Dispute Solution</p><a href="tel:6350262865" class="btn call-btn">Call Now</a><a href="https://wa.me/6350262865" class="btn whatsapp-btn">WhatsApp</a>`
];
const bannerDots = document.querySelector('.banner-dots');
let bannerIndex = 0;

// Create dots
bannerImages.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.addEventListener('click', () => changeBanner(i));
  bannerDots.appendChild(dot);
});
function changeBanner(i = null) {
  bannerImages[bannerIndex].classList.remove('active');
  bannerDots.children[bannerIndex].classList.remove('active');
  if (i !== null) bannerIndex = i;
  else bannerIndex = (bannerIndex + 1) % bannerImages.length;
  bannerImages[bannerIndex].classList.add('active');
  bannerDots.children[bannerIndex].classList.add('active');
  bannerText.innerHTML = bannerTexts[bannerIndex];
}
changeBanner(0);
setInterval(changeBanner, 5000);

// ===== BOX ANIMATION =====
const boxes = document.querySelectorAll('.box');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.3 });
boxes.forEach(box => observer.observe(box));

// ===== TESTIMONIAL SLIDER =====
const testimonials = document.querySelectorAll('.testimonial');
const testDots = document.querySelector('.test-dots');
let testIndex = 0;

// Create testimonial dots
testimonials.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.addEventListener('click', () => changeTestimonial(i));
  testDots.appendChild(dot);
});
function changeTestimonial(i = null) {
  testimonials[testIndex].classList.remove('active');
  testDots.children[testIndex].classList.remove('active');
  if (i !== null) testIndex = i;
  else testIndex = (testIndex + 1) % testimonials.length;
  testimonials[testIndex].classList.add('active');
  testDots.children[testIndex].classList.add('active');
}
changeTestimonial(0);
setInterval(changeTestimonial, 4000);
