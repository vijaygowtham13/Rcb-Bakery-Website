// categories.js
export function loadCategories() {
  const categoriesHTML = `
    <section class="categories">
      <h2>Shop by Category</h2>
      <div class="category-grid">
        <a href="products/cakes.html" class="category-card">
          <img src="images/cake.webp" alt="Cakes" />
          <h3>Cakes</h3>
        </a>
        <a href="products/pastries.html" class="category-card">
          <img src="images/pastries.webp" alt="Pastries" />
          <h3>Pastries</h3>
        </a>
        <a href="products/cookies.html" class="category-card">
          <img src="images/cookie.jpg" alt="Cookies" />
          <h3>Cookies</h3>
        </a>
        <a href="products/breads.html" class="category-card">
          <img src="images/breads.webp" alt="Breads" />
          <h3>Ee Saala Specials</h3>
        </a>
         <a href="products/sandwich.html" class="category-card">
          <img src="images/sandwich.webp" alt="Breads" />
          <h3>Sandwich</h3>
        </a>
         <a href="products/beverages.html" class="category-card">
          <img src="images/beverages.jpg" alt="Breads" />
          <h3>Summer Specials</h3>
        </a>
         <a href="products/brownies.html" class="category-card">
          <img src="images/brownie.jpg" alt="Breads" />
          <h3>Virat's Specials</h3>
        </a>
         <a href="products/giftings.html" class="category-card">
          <img src="images/gifting.webp" alt="Breads" />
          <h3>Giftings</h3>
        </a>
         <a href="products/teacakes.html" class="category-card">
          <img src="images/teacakes.webp" alt="Breads" />
          <h3>Teacakes</h3>
        </a>
         <a href="products/croissants.html" class="category-card">
          <img src="images/breads.webp" alt="Breads" />
          <h3>Croissants</h3>
        </a>
      </div>
    </section>
  `;
  
  document.getElementById('categories').innerHTML = categoriesHTML;
}2
