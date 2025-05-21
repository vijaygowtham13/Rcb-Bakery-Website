
import { renderNavbar } from './components/navbar.js';
import { loadHero, startHeroSlider } from './components/hero.js';
import { loadCategories } from './components/categories.js';
import { loadFeaturedProducts } from './components/featured-products.js';
import { renderFindUs } from './components/find-us.js';



window.addEventListener('DOMContentLoaded', () => {
  renderNavbar();

  const path = window.location.pathname;

  if (path.endsWith('index.html') || path === '/' ) {
  
    loadHero();

  
    setTimeout(() => {
      const navbar = document.querySelector('.navbar');
      const hero = document.getElementById('hero');
      if (navbar && hero) {
        hero.style.marginTop = `${navbar.offsetHeight}px`;
      }

     
      startHeroSlider();
    }, 100);

    
    loadCategories();
    
  }

  if (path.endsWith('find-us.html')) {
    renderFindUs();
  }
});


window.addEventListener('scroll', function () {
  const scrollBtn = document.getElementById('scrollToTopBtn');
  if (window.scrollY > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});


document.getElementById('scrollToTopBtn').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
