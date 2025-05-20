
import { renderNavbar } from './components/navbar.js';
import { loadHero, startHeroSlider } from './components/hero.js';
import { loadCategories } from './components/categories.js';
import { loadFeaturedProducts } from './components/featured-products.js';
import { renderFindUs } from './components/find-us.js';



window.addEventListener('DOMContentLoaded', () => {
  renderNavbar();

  const path = window.location.pathname; //current page url 

  if (path.endsWith('index.html') || path === '/' ) {
    // ✅ Step 1: Load hero first
    loadHero();

    // ✅ Step 2: Wait a moment, then shift hero down after it's in the DOM
    setTimeout(() => {
      const navbar = document.querySelector('.navbar');
      const hero = document.getElementById('hero');
      if (navbar && hero) {
        hero.style.marginTop = `${navbar.offsetHeight}px`;
      }

      // ✅ Then start the hero slider
      startHeroSlider();
    }, 100);

    // Load rest of the components
    loadCategories();
    //loadFeaturedProducts();
  }

  if (path.endsWith('find-us.html')) {
    renderFindUs();
  }
});

// Show the button when user scrolls down 200px
window.addEventListener('scroll', function () {
  const scrollBtn = document.getElementById('scrollToTopBtn');
  if (window.scrollY > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

// Scroll to top smoothly on button click
document.getElementById('scrollToTopBtn').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
