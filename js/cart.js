// Cart Logic
let cartItems = JSON.parse(localStorage.getItem('maison_cart')) || [];

function saveCart() {
  localStorage.setItem('maison_cart', JSON.stringify(cartItems));
}

function openCart() {
  const overlay = document.getElementById('cartOverlay');
  if(overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCart() {
  const overlay = document.getElementById('cartOverlay');
  if(overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('cartOverlay')) closeCart();
}

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  const totalEl = document.getElementById('cartTotal');
  const itemsContainer = document.getElementById('cartItems');

  if (countEl) countEl.textContent = cartItems.length;
  
  let total = 0;
  if (itemsContainer) {
    itemsContainer.innerHTML = '';
    cartItems.forEach((item, index) => {
      const product = products.find(p => p.id === item.id);
      if(!product) return;
      total += product.price;

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <div class="cart-item-visual">
          <img src="${product.image}" style="width:100%;height:100%;object-fit:cover;">
        </div>
        <div>
          <div class="cart-item-name">${product.name}</div>
          <div class="cart-item-meta">${item.meta || 'Size — Default'}</div>
          <button class="remove-item" onclick="removeFromCart(${index})" style="background:none;border:none;color:var(--muted);font-size:9px;text-transform:uppercase;margin-top:8px;cursor:pointer;letter-spacing:0.1em">Remove</button>
        </div>
        <div class="cart-item-price">€ ${product.price.toLocaleString('de-DE')}</div>
      `;
      itemsContainer.appendChild(itemEl);
    });
  }

  if (totalEl) totalEl.textContent = '€ ' + total.toLocaleString('de-DE');

  // Checkout page total
  const checkoutTotal = document.getElementById('checkoutTotal');
  if (checkoutTotal) {
      checkoutTotal.textContent = '€ ' + total.toLocaleString('de-DE');
  }
}

function addToCart(id, meta = 'Size — Select in checkout') {
  cartItems.push({ id, meta });
  saveCart();
  updateCartUI();
  
  // Flash cart button
  const btn = document.querySelector('.cart-btn');
  if (btn) {
    btn.style.background = 'var(--saddle)';
    btn.style.color = 'var(--cream)';
    setTimeout(() => { btn.style.background = ''; btn.style.color = ''; }, 600);
  }
  openCart();
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  saveCart();
  updateCartUI();
}

function clearCart() {
  cartItems = [];
  saveCart();
  updateCartUI();
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
});
