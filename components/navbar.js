export function renderNavbar() {
  document.getElementById("navbar").innerHTML = `
    <header class="navbar">
      <div class="navbar-container">
      
        <div class="logo">
          <img src="/images/logo.png" alt="RCB Logo" class="logo-img" />
          <span>𝕽𝕮𝕭 𝔹𝔸𝕂𝔼ℝ𝕐</span>
           <button class="hamburger" id="hamburger">&#9776;</button> <!-- ☰ -->
        </div>
       
        <nav class="nav-links" id="nav-links">
          <a href="/index.html">𝐇𝐎𝐌𝐄</a>
          <a href="/about.html">𝐀𝐁𝐎𝐔𝐓</a>
          <div class="dropdown">
            <button class="dropbtn">𝐏𝐑𝐎𝐃𝐔𝐂𝐓𝐒▾</button>
            <div class="dropdown-content">
              <a href="/products/cakes.html">Cakes</a>
              <a href="/products/pastries.html">Pastries</a>
              <a href="/products/cookies.html">Cookies</a>
              <a href="/products/breads.html">Breads</a>
              <a href="/products/sandwich.html">Sandwich</a>
              <a href="/products/beverages.html">Beverages</a>
              <a href="/products/brownies.html">Brownies</a>
              <a href="/products/giftings.html">Giftings</a>
              <a href="/products/teacakes.html">Teacakes</a>
              <a href="/products/croissants.html">Croissants</a>
            </div>
          </div>
          <a href="/find-us.html">𝐅𝐈𝐍𝐃𝐔𝐒</a>
          <a href="/contact.html">𝐂𝐎𝐍𝐓𝐀𝐂𝐓</a>
          <a href="/cart.html" class="cart-link">
            C҉A҉R҉T҉<br>---------<br>
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


