/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
  {
    name: "Cherry",
    price: 10,
    quantity: 0,
    productId: 100,
    image: "./workspace/home/src/images/cherry.jpg"
  },
  {
    name: "Orange",
    price: 20,
    quantity: 0, 
    productId: 200,
    image: "./workspace/home/src/images/orange.jpg"
  },
  {
    name: "Strawberry",
    price: 30,
    quantity: 0, 
    productId: 300,
    image: "./workspace/home/src/images/strawberry.jpg"
  }
];

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

/* Variable to maintain the total amount paid by the customer */
let totalPaid = 0;

/* Create a function named addProductToCart that takes in the product productId as an argument
- addProductToCart should get the correct product based on the productId
- addProductToCart should then increase the product's quantity
- if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  const chosenProduct = products.find(item => item.productId === productId);
  if (chosenProduct) {
    const cartedItem = cart.find(item => item.productId === productId);
    if (cartedItem) {
      cartedItem.quantity++;
    } else {
      cart.push({ ...chosenProduct, quantity: 1 });
    }
  } 
}

/* Create a function named increaseQuantity that takes in the productId as an argument
- increaseQuantity should get the correct product based on the productId
- increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  const cartedItem = cart.find(item => item.productId === productId);
  if (cartedItem) {
    cartedItem.quantity++;
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
- decreaseQuantity should get the correct product based on the productId
- decreaseQuantity should decrease the quantity of the product
- if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId)
{
  const cartedItem = cart.find(item => item.productId === productId);
  if (cartedItem) {
    cartedItem.quantity--;
    if (cartedItem.quantity === 0) {
      cart.splice(cart.indexOf(cartedItem), 1);
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
- removeProductFromCart should get the correct product based on the productId
- removeProductFromCart should update the product quantity to 0
- removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  const cartedItemIndex = cart.findIndex(item => item.productId === productId);
  if (cartedItemIndex !== -1) {
    const removedItem = cart.splice(cartedItemIndex, 1)[0];
  }
}

/* Create a function named cartTotal that has no parameters
- cartTotal should iterate through the cart to get the total of all products
- cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  return total;
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart.length = 0;
}

/* Create a function named pay that takes in an amount as an argument
- pay will return a negative number if there is a remaining balance
- pay will return a positive number if money should be returned to the customer
*/
function pay(amount) {
  totalPaid += amount;
  const remainingBalance = totalPaid - cartTotal();
  return remainingBalance;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.) */


/* The following is for running unit tests.
To fully complete this project, it is expected that all tests pass.
Run the following command in terminal to run tests
npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
