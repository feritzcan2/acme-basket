import { cartSubtotal, shippingCents } from './cart.js';

export function checkout(items) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('Cart is empty');
  }
  const subtotal = cartSubtotal(items);
  const shipping = shippingCents(subtotal);
  return { subtotal, shipping, total: subtotal + shipping };
}
