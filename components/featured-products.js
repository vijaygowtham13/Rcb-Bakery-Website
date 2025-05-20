// featured-products.js
import { createProductCard } from './product-card.js';

export function loadFeaturedProducts() {
  const featuredProducts = [
    { id: 'cake1', name: 'Fresh Cream Pineapple', price: 12.99, image: 'images/cake1.jpg' },
    { id: 'cake2', name: 'Chocolate Truffle', price: 15.99, image: 'images/cake2.jpg' },
    { id: 'cake3', name: 'Red Velvet', price: 18.99, image: 'images/cake3.jpg' },
    { id: 'cake4', name: 'Black Forest', price: 20.99, image: 'images/cake4.jpg' },
    { id: 'cake5', name: 'Fruit Overload', price: 16.99, image: 'images/cake5.jpg' },
    { id: 'cake6', name: 'KitKat Cake', price: 19.99, image: 'images/cake6.jpg' }
  ];

  let productsHTML = '';
  featuredProducts.forEach(product => {
    productsHTML += createProductCard(product.id, product.name, product.price, product.image);
  });

  document.getElementById('featured-products').innerHTML = productsHTML;
}
