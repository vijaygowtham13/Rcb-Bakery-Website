export function renderNavbar() {
  document.getElementById("navbar").innerHTML = `
    <header class="navbar">
      <div class="navbar-container">
      
        <div class="logo">
          <img src="/images/logo.png" alt="RCB Logo" class="logo-img" />
          <span>Rcb Bakery</span>
           <button class="hamburger" id="hamburger">&#9776;</button> <!-- ☰ -->
        </div>
       
        <nav class="nav-links" id="nav-links">
          <a href="/index.html">Home</a>
          <a href="/about.html">About</a>
          <div class="dropdown">
            <button class="dropbtn">Products▾</button>
            <div class="dropdown-content">
              <a href="/products/cakes.html">Cakes</a>
              <a href="/products/pastries.html">Pastries</a>
              <a href="/products/cookies.html">Cookies</a>
              <a href="/products/breads.html">Ee Saala Specials</a>
              <a href="/products/sandwich.html">Sandwich</a>
              <a href="/products/beverages.html">Summer Specials</a>
              <a href="/products/brownies.html">Virat Specials</a>
              <a href="/products/giftings.html">Giftings</a>
              <a href="/products/teacakes.html">Teacakes</a>
              <a href="/products/croissants.html">Croissants</a>
            </div>
          </div>
          <a href="/find-us.html">Findus</a>
          <a href="/contact.html">Contactus</a>
          <a href="/cart.html" class="cart-link">
          🛒Cart<br>
          </a>
        </nav>
      </div>
    </header>
  `;

  
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show-mobile-menu");
  });
}


