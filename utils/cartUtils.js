// utils/cartUtils.js
export function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const countSpan = document.getElementById("cart-count");
  if (countSpan) countSpan.textContent = totalCount;
}
