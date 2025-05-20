export function setupFeaturedEvents() {
  const featuredSection = document.getElementById('featured-scroll');
  if (!featuredSection) return;

  featuredSection.querySelectorAll('.featured-item').forEach(item => {
    const minusBtn = item.querySelector('.qty-minus');
    const plusBtn = item.querySelector('.qty-plus');
    const qtySpan = item.querySelector('.qty');
    const addToCartBtn = item.querySelector('.add-to-cart');

    minusBtn.addEventListener('click', () => {
      let qty = parseInt(qtySpan.textContent);
      if (qty > 0) qtySpan.textContent = qty - 1;
    });

    plusBtn.addEventListener('click', () => {
      let qty = parseInt(qtySpan.textContent);
      qtySpan.textContent = qty + 1;
    });

    addToCartBtn.addEventListener('click', () => {
      let qty = parseInt(qtySpan.textContent);
      if (qty <= 0) {
        alert('Please select a quantity greater than 0.');
        return;
      }

      const name = item.querySelector('h3').textContent;
      const priceText = item.querySelector('p').textContent;
      const price = parseInt(priceText.replace('₹', '').trim());
      const image = item.querySelector('img').src;

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const index = cart.findIndex(product => product.name === name);

      if (index !== -1) {
        cart[index].quantity += qty;
      } else {
        cart.push({ name, price, image, quantity: qty });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${qty} x ${name} added to cart!`);

      // Reset quantity to 0 after adding
      qtySpan.textContent = '0';
    });
  });
}
