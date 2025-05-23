// featured.js
export function setupFeaturedEvents() {
  const featuredScroll = document.getElementById('featured-scroll');

  document.querySelectorAll('.qty-minus').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qtySpan = btn.nextElementSibling;
      let qty = parseInt(qtySpan.textContent);
      if (qty > 0) qtySpan.textContent = qty - 1;
    });
  });

  document.querySelectorAll('.qty-plus').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qtySpan = btn.previousElementSibling;
      let qty = parseInt(qtySpan.textContent);
      qtySpan.textContent = qty + 1;
    });
  });

  document.querySelectorAll('.add-to-cart').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.featured-item');
      const name = item.querySelector('h3').textContent;
      const price = parseFloat(item.querySelector('p').textContent.replace('₹', ''));
      const quantity = parseInt(item.querySelector('.qty').textContent);
      const image = item.querySelector('img').getAttribute('src'); // ✅ this stays as-is

      if (quantity > 0) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(i => i.name === name);
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          cart.push({ name, price, quantity, image });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        showToast(`${quantity} x ${name} added to cart`);
        item.querySelector('.qty').textContent = 0;
      } else {
        showToast(`Please select quantity`, true);
      }
    });
  });
}

export function scrollFeatured(direction) {
  const scrollContainer = document.getElementById('featured-scroll');
  const scrollAmount = 300;
  scrollContainer.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
}

function showToast(message, isError = false) {
  let toast = document.createElement('div');
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.top = '50%';
  toast.style.left = '50%';
  toast.style.transform = 'translate(-50%, -50%)';
  toast.style.padding = '16px 24px';
  toast.style.backgroundColor = isError ? '#e74c3c' : '#2ecc71';
  toast.style.color = '#fff';
  toast.style.fontSize = '18px';
  toast.style.borderRadius = '8px';
  toast.style.zIndex = 9999;
  toast.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.3s ease';

  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 1800);
}
