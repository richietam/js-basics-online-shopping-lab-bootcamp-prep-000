var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.ceil(Math.random()*100);
  cart.push({
    ['itemName']: item,
    ['itemPrice']: price});
  console.log(`${item} has been added to your cart.`)
  return item + " has been added to your cart."
}

function viewCart() {
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
    return "Your shopping cart is empty."
  } else if(cart.length ===1 ) {
    var printOneItem = "In your cart, you have " + Object.values(cart[0])[0] + " at $" + Object.values(cart[0])[1] + "."
    console.log(printOneItem)
    return printOneItem
  } else if(cart.length ===2 ) {
    var printTwoItems = "In your cart, you have " + Object.values(cart[0])[0] + " at $" + Object.values(cart[0])[1] + ", and " + Object.values(cart[1])[0] + " at $" + Object.values(cart[1])[1] + "."
     console.log(printTwoItems)
     return printTwoItems
  } else {
    var cartItems = []
    var i = 0
    for(let i=0; i<cart.length-1 ;i++){
      cartItems.push(Object.values(cart[i])[0] + " at $" + Object.values(cart[i])[1])
    }
      var printThreeOrMoreItems = "In your cart, you have " + cartItems.join(", ") + ", and " + Object.values(cart[cart.length-1])[0] + " at $" + Object.values(cart[cart.length-1])[1] +"."
      console.log(printThreeOrMoreItems)
      return printThreeOrMoreItems
    }
  }


  // write your code here


function total() {
  var pricePerItemInCart = []
  var totalPrice = 0
  var i = 0
  for(i=0; i < cart.length; i++){
    var itemPrice = Object.values(cart[i])[1]
    pricePerItemInCart.push(itemPrice)
  }
  for(var j = 0; j < pricePerItemInCart.length; j++) {
    totalPrice = pricePerItemInCart[j] + totalPrice
  }
  console.log(totalPrice)
  return totalPrice
  // write your code here
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if(Object.values(cart[i]).hasOwnProperty(item)) {
      cart.slice(i,1)
      return cart
    }
  } console.log("That item is not in your cart.")
  return "That item is not in your cart."
}

  // write your code here

function placeOrder(cardNumber) {
  // write your code here
}
