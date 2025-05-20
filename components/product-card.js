// product-card.js
export function createProductCard(id, name, price, image) {
  return `
    <div class="product-card">
      <img src="${image}" alt="${name}"/>
      <p>${name}</p>
      <button onclick="addToCart('${id}', '${name}', ${price}, '${image}')">Add to Cart</button>
    </div>
  `;
}
