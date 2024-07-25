// cartUtils.js

const CART_KEY = 'cart'

// Initialize cart in local storage if it doesn't exist
export const initializeCart = () => {
  if (!localStorage.getItem(CART_KEY)) {
    localStorage.setItem(CART_KEY, JSON.stringify([]))
  }
}

// Get cart from local storage
export const getCart = () => {
  const cart = localStorage.getItem(CART_KEY)
  return cart ? JSON.parse(cart) : []
}

// Save cart to local storage
export const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
}

// Add item to cart
export const addToCart = (productId) => {
  const cart = getCart()
  cart.push(productId)
  saveCart(cart)
}

// Remove item from cart
export const removeFromCart = (productId) => {
  let cart = getCart()
  cart = cart.filter((id) => id !== productId)
  saveCart(cart)
}

// Clear cart
export const clearCart = () => {
  localStorage.removeItem(CART_KEY)
  initializeCart() // Reinitialize the cart after clearing
}

export const getCartItemsWithCounts = (products) => {
  console.log(products)
  const cart = getCart()
  const productCounts = cart.reduce((counts, id) => {
    counts[id] = (counts[id] || 0) + 1
    return counts
  }, {})

  const items = products
    .map((product) => ({
      ...product,
      count: productCounts[product.$id] || 0,
    }))
    .filter((product) => product.count > 0)
  console.log(items)
  return items
}
