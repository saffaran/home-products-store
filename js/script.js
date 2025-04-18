// نمونه اولیه سبد خرید با localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
// اضافه کردن محصول به سبد خرید
function addToCart(productName, price) {
  const item = { name: productName, price: price, quantity: 1 };
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('${productName} added to cart.');
}
// نمایش سبد خرید در cart.html
function renderCartItems() {
  const container = document.querySelector('.cart-items');
  const totalElement = document.querySelector(".cart-total h3");
  if (!container || !totalElement) return;

  container.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    container.innerHTML += `
      <div class="cart-item">
        <img src="assets/images/sample.jpg" alt="${item.name}">
        <div class="item-details">
          <h3>${item.name}</h3>
          <p>Price: $${item.price}</p>
          <p>Quantity: ${item.quantity}</p>
        </div>
      </div>
    `;
  });
  totalElement.textContent = 'total: $$ { total.toFixed(2)}';
}
// ریست کردن سبد خرید پس از پرداخت
function completePurchase() {
  alert('Thank you for your purchase!');
  localStorage.removeItem('cart');
}