const CART_KEY = 'cart'

export const initializeCart = (userId) => {
  if (!localStorage.getItem(CART_KEY)) {
    const cartObject = { userId, cart: [] }
    localStorage.setItem(CART_KEY, JSON.stringify(cartObject))
  }
}

export const getCart = (userId) => {
  const cartObject = JSON.parse(localStorage.getItem(CART_KEY))
  if (cartObject && cartObject.userId === userId) {
    const cart = cartObject.cart.filter((id) => id !== null)
    return cart
  }
  return []
}

export const saveCart = (userId, cart) => {
  const cartObject = { userId, cart }
  localStorage.setItem(CART_KEY, JSON.stringify(cartObject))
}

export const addToCart = (userId, productId) => {
  if (!productId) return

  const cart = getCart(userId)
  cart.push(productId)
  console.log(cart)

  saveCart(userId, cart)
}

export const removeFromCart = (userId, productId) => {
  let cart = getCart(userId)
  cart = cart.filter((id) => id !== productId)
  saveCart(userId, cart)
}

export const getCartItemsWithCounts = (userId, products) => {
  const cart = getCart(userId)
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
  return items
}

export const getCartSubtotal = (userId, products) => {
  const items = getCartItemsWithCounts(userId, products)
  const subtotal = items.reduce((total, item) => {
    return total + item.productPrice * item.count
  }, 0)
  return subtotal
}

export const clearCart = (userId) => {
  if (!userId) return
  const cartObject = { userId, cart: [] }
  localStorage.setItem(CART_KEY, JSON.stringify(cartObject))
}

export const cleanCart = (userId) => {
  const cart = getCart(userId).filter((id) => id !== null)
  saveCart(userId, cart)
}

export const removeOneFromCart = (userId, productId) => {
  let cart = getCart(userId)
  const index = cart.indexOf(productId)
  if (index !== -1) {
    cart.splice(index, 1)
  }
  saveCart(userId, cart)
}
