import {toggle, addToCartLogic} from '../Logic/logic';

const product = {
  id: 1,
  product: 'Fillets',
  price: 69.41,
  image: 'http://goodtogostore.com/product-package-images/192837494.jpg',
};

describe('Tests Toggle Show button', () => {
  test('if given true return false', () => {
    expect(toggle(true)).toBe(false)
  })
  test('if given false, return true', () => {
    expect(toggle(false)).toBe(true)
  })
  test('if given an object, return false', ()=> {
    expect(toggle({name: 'kenny'})).toBeFalsy()
  })
  test('if given a falsy value, return true', () => {
    expect(toggle()).toBeTruthy()
  })
});

describe.only('Can add item to cart', () => {
  let cart = []

  beforeEach(()=> {
    cart = []
  })

  test('can add item to array and has appropriate length', () => {
    expect(addToCartLogic(cart, product)).toHaveLength(1)
  })
  test('does not return the same array passed in', () => {
    let newCart = addToCartLogic(cart, product)
    expect(newCart).not.toBe(cart)
  })
  test('product we passed in should not be modified', () => {
    let newCart = addToCartLogic(cart, product)
    expect(product).not.toHaveProperty('qty')
  })
  test('cart contains the item we added', () => {
    let newCart = addToCartLogic(cart, product)[0]
    expect(newCart).toHaveProperty('qty', 1)
  })
  test('item added in has a quantity property', () => {
    let newCart = addToCartLogic(cart, product)[0]
    expect(newCart).toHaveProperty('id', 1)
  })
  test('cart contains the item we added', () => {

    let newCart = addToCartLogic(cart, product)
    newCart = addToCartLogic(newCart, product)[0]
    expect(newCart).toHaveProperty('qty', 2)
  })
  
  test('does not modify the items of the original cart', () => {
    let newCart = addToCartLogic(cart, product)
    let newCart2 = addToCartLogic(newCart, product)
    expect(newCart[0]).not.toHaveProperty('qty', 2)
  })


});

describe('can calculate sub total', () => {
  // can get correct sub total
  // has 2 decimal points at the end
  // does not go past 2 decimal palces
  // returns a string(because numbers can't be 1.00 it has to be a string to keep the two deciamals)
  // string starts with a $
  // does not modify passed in object
});

describe('can calculate Total', () => {
  // can get correct sub total
  // does have 2 decimal points at the end
  // does not go past 2 decimal palces
  // returns a string(because numbers can't be 1.00 it has to be a string to keep the two deciamals)
  // starts with a $
  // does not modify passed in array
});

describe('can remove item', () => {
  // before each setUp a test cart with 2 items of varying quantity
  // can lower quantity by one if quantity is over 1
  // can remove item from cart if quantity is 1
  // returns a new array
  // does not modify the items from the original cart
  // can handle being given an empty array
  // can handle if the item is not found in the array
});
