export function loadHero() {
  document.getElementById("hero").innerHTML = `
    <section class="hero-carousel">
      <div class="carousel-track">
        <div class="carousel-slide">
          <img src="images/slider1.jpeg" alt="Pastries" class="hero-click" data-link="/products/brownies.html" />
        </div>
        <div class="carousel-slide">
          <img src="images/slider2.jpeg" alt="Beverages" class="hero-click" data-link="/products/breads.html" />
        </div>
        <div class="carousel-slide">
          <img src="images/slider3.jpeg" alt="Breads" class="hero-click" data-link="/products/beverages.html" />
        </div>
      </div>
    </section>
  `;
}

export function startHeroSlider() {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const images = document.querySelectorAll('.hero-click');
  let index = 0;

  function goToNextSlide() {
    const slideWidth = slides[0].offsetWidth;
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  // Auto slide every 3 seconds
  let intervalId = setInterval(goToNextSlide, 3000);

  // Image click → redirect
  images.forEach((img) => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      const link = img.dataset.link;
      if (link) {
        window.location.href = link;
      }
    });
  });

  // Click outside image → next slide
  document.querySelector('.hero-carousel').addEventListener('click', () => {
    goToNextSlide();
    clearInterval(intervalId);
    intervalId = setInterval(goToNextSlide, 3000);
  });

  // Responsive fix on window resize
  window.addEventListener('resize', () => {
    track.style.transform = `translateX(-${index * slides[0].offsetWidth}px)`;
  });
}
