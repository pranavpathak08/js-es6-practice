/*
Build a function that calculates the total cost of a shopping cart. If the subtotal exceeds $100, apply a 10% discount.

const cart = [
    { name: "Laptop", price: 999, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1 }
];

{
  subtotal: 1124,
  discount: 112.4,
  finalTotal: 1011.6
}

*/


//Solution

const cart = [
    { name: "Laptop", price: 999, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1 }
];

function totalCost(cart) {
    const subTotal = cart.reduce((total, item) => {
        return total + item.price * item.quantity  //used reduce() to calculate total which is cost of one multiplited with quantity
    }, 0)

    const discount = subTotal > 100 ? subTotal * 0.1 : 0;
    const finalTotal = subTotal - discount;

    return {
        subTotal,
        discount,
        finalTotal
    }
}

const result = totalCost(cart);
console.log(result);