const CART_KEY = 'shopmate_cart';

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function updateCartCount() {
  const cart = getCart();
  document.querySelectorAll('[data-testid="cart-count"]').forEach((el) => {
    el.textContent = String(cart.length);
  });
}

function addToCart(name, price) {
  const cart = getCart();
  cart.push({ name, price: Number(price) });
  saveCart(cart);
  updateCartCount();
}

function formatEuro(value) {
  return `€${value.toFixed(2)}`;
}

function setupProductPage() {
  const buttons = document.querySelectorAll('[data-testid="add-to-cart"]');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      addToCart(button.dataset.product, button.dataset.price);
      button.textContent = 'Added';
      setTimeout(() => (button.textContent = 'Add to cart'), 700);
    });
  });

  const search = document.querySelector('[data-testid="product-search"]');
  const category = document.querySelector('[data-testid="category-filter"]');
  const cards = [...document.querySelectorAll('[data-testid="product-card"]')];
  const noResults = document.querySelector('[data-testid="no-results"]');

  function applyFilters() {
    const query = (search?.value || '').toLowerCase().trim();
    const selected = category?.value || 'all';
    let visibleCount = 0;

    cards.forEach((card) => {
      const name = card.dataset.name.toLowerCase();
      const cat = card.dataset.category;

      // Intentional bug: search checks only startsWith instead of includes.
      const matchesSearch = query === '' || name.startsWith(query);
      const matchesCategory = selected === 'all' || cat === selected;

      const visible = matchesSearch && matchesCategory;
      card.classList.toggle('hidden', !visible);
      if (visible) visibleCount++;
    });

    noResults?.classList.toggle('hidden', visibleCount > 0);
  }

  search?.addEventListener('input', applyFilters);
  category?.addEventListener('change', applyFilters);
}

function setupCartPage() {
  const container = document.querySelector('[data-testid="cart-items"]');
  const empty = document.querySelector('[data-testid="empty-cart"]');
  const subtotalEl = document.querySelector('[data-testid="cart-subtotal"]');
  const totalEl = document.querySelector('[data-testid="cart-total"]');
  const shipping = 4.99;
  let cart = getCart();

  if (!container) return;

  container.innerHTML = '';
  empty.classList.toggle('hidden', cart.length > 0);

  cart.forEach((item, index) => {
    const row = document.createElement('article');
    row.className = 'cart-row';
    row.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <p>${formatEuro(item.price)}</p>
      </div>
      <button data-testid="remove-item" data-index="${index}">Remove</button>
    `;
    container.appendChild(row);
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  subtotalEl.textContent = formatEuro(subtotal);

  // Intentional bug: total ignores shipping.
  totalEl.textContent = formatEuro(subtotal);

  document.querySelectorAll('[data-testid="remove-item"]').forEach((button) => {
    button.addEventListener('click', () => {
      cart.splice(Number(button.dataset.index), 1);
      saveCart(cart);

      // Intentional bug: cart count not updated immediately after removal.
      setupCartPage();
    });
  });
}

function setupCheckoutPage() {
  const form = document.querySelector('[data-testid="checkout-form"]');
  const error = document.querySelector('[data-testid="checkout-error"]');
  const success = document.querySelector('[data-testid="checkout-success"]');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('[data-testid="checkout-name"]').value.trim();
    const email = document.querySelector('[data-testid="checkout-email"]').value.trim();
    const address = document.querySelector('[data-testid="checkout-address"]').value.trim();
    const city = document.querySelector('[data-testid="checkout-city"]').value.trim();

    error.classList.add('hidden');
    success.classList.add('hidden');

    if (!name || !email || !address || !city) {
      error.textContent = 'All fields are required.';
      error.classList.remove('hidden');
      return;
    }

    // Intentional bug: email validation is too weak and accepts invalid@.
    if (!email.includes('@')) {
      error.textContent = 'Please enter a valid email address.';
      error.classList.remove('hidden');
      return;
    }

    success.classList.remove('hidden');
    localStorage.removeItem(CART_KEY);
    updateCartCount();
  });
}

function setupLoginPage() {
  const form = document.querySelector('[data-testid="login-form"]');
  const message = document.querySelector('[data-testid="login-message"]');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.querySelector('[data-testid="login-email"]').value.trim();
    const password = document.querySelector('[data-testid="login-password"]').value.trim();

    if (email === 'qa@example.com' && password === 'Password123!') {
      message.textContent = 'Login successful.';
      message.className = 'success';
      return;
    }

    // Intentional bug: message exists but remains hidden for invalid login.
    message.textContent = 'Invalid email or password.';
  });
}

function setupContactPage() {
  const form = document.querySelector('[data-testid="contact-form"]');
  const error = document.querySelector('[data-testid="contact-error"]');
  const success = document.querySelector('[data-testid="contact-success"]');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('[data-testid="contact-name"]').value.trim();
    const email = document.querySelector('[data-testid="contact-email"]').value.trim();
    const msg = document.querySelector('[data-testid="contact-message"]').value.trim();

    error.classList.add('hidden');
    success.classList.add('hidden');

    if (!name || !email || !msg) {
      error.textContent = 'Please complete all fields.';
      error.classList.remove('hidden');
      return;
    }

    success.classList.remove('hidden');
  });
}

updateCartCount();
setupProductPage();
setupCartPage();
setupCheckoutPage();
setupLoginPage();
setupContactPage();
