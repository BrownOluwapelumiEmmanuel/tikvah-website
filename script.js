// Animate hero title letters
const letters = document.querySelectorAll('#hero-title span');
letters.forEach((el, i) => {
  el.style.animationDelay = `${i * 0.1}s`;
});

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Toggle FAQ answers
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.question');
  const answer = item.querySelector('.answer');
  question.addEventListener('click', () => {
    answer.classList.toggle('show');
  });
});

// Initialize testimonial swiper
const testimonialSwiper = new Swiper('.testimonial-swiper', {
  loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

});
