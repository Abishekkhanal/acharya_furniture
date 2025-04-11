let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId, productName, productPrice) {
  const existing = cart.find(p => p.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, name: productName, price: productPrice, qty: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added to cart');
}

function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = "";

  let total = 0;
  cartItems.forEach(item => {
    total += item.price * item.qty;
    cartContainer.innerHTML += `
      <div>
        <h4>${item.name}</h4>
        <p>₹${item.price} x ${item.qty}</p>
        <button onclick="removeItem('${item.id}')">Remove</button>
      </div>
    `;
  });
  cartContainer.innerHTML += `<h3>Total: ₹${total}</h3>`;
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}
