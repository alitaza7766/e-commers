const CART_KEY = "shope.co.cart";

export function getCart() {
  try {
    const storedCart = window.localStorage.getItem(CART_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-updated"));
}

export function addToCart(product) {
  const cart = getCart();
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
}

export function updateCartQuantity(productId, quantity) {
  const cart = getCart()
    .map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(0, quantity) }
        : item,
    )
    .filter((item) => item.quantity > 0);

  saveCart(cart);
}

export function removeFromCart(productId) {
  saveCart(getCart().filter((item) => item.id !== productId));
}
