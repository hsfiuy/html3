// Slideshow functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow img');

function showSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].classList.add('active');
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

if (slides.length > 0) {
  slides[0].classList.add('active');
  showSlides();
}

// Video Modal functionality
function openVideoModal(element) {
  const video = element.querySelector('video');
  const src = video.querySelector('source').src;
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  
  modalVideo.src = src;
  modal.classList.add('active');
  modalVideo.play();
}

function closeVideoModal(event) {
  if (event && event.target.id !== 'videoModal') return;
  
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  
  modalVideo.pause();
  modal.classList.remove('active');
}

// Close modal when close button is clicked
document.addEventListener('DOMContentLoaded', function() {
  const closeBtn = document.querySelector('.close-modal');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeVideoModal);
  }
  
  // Close modal on Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeVideoModal();
    }
  });

  // Scroll reveal for all fade-up elements
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
  });

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const feedback = document.getElementById('formFeedback');
      feedback.textContent = 'Thank you! Your message has been sent.';
      feedback.style.color = '#2a662d';
      contactForm.reset();
    });
  }
});