export function toggle(bool) {
  // Build me!
  return !bool
}
export function addToCartLogic(cart, item) {
  // Build me!
  let newCart = [...cart]
  let foundItemIndex = cart.findIndex((cartItem) => {
    return cartItem.id === item.id
  })
  if(foundItemIndex !== -1){
    newCart[foundItemIndex] = {...newCart[foundItemIndex], qty: newCart[foundItemIndex].qty + 1}
  } else{
    let newItem = {...item, qty: 1}
    newCart = [...newCart, newItem]
  }
  return newCart

}
export function calculateSubTotal() {
  // Build me!
}
export function calculateTotal() {
  // Build me!
}
export function removeItem() {
  // Build me!
}
