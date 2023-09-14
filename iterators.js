//.forEach
// const prices = [20, 15, 30, 40, 55];

// prices.forEach((prices, idx) => {
//   console.log(idx, prices);
// });

//.map `index / value` reture new array

// const newPrices = prices.map((prices) => {
//   return prices * 1.1;
// });

// const premiumPrices = newPrices.filter((price) => {
//   return price > 30;
// });

// console.log(premiumPrices);

//.filter === filterArry retured array |^|

// const sumPrice = newPrices.reduce((prevValue, price) => {
//   return prevValue + price;
// });

// console.log("Sum Price:", sumPrice);

// Add initialValue

// const sumPrice = newPrices.reduce((prevValue, price) => {
//   return prevValue + price;
// },5);

// console.log("Sum Price:", sumPrice);

const pricesForcoffee = [55, 65, 85];

pricesForcoffee.forEach((prices, idx) => {
  console.log(idx, prices);
});
// ถ้าเราจะใส่ index เข้าไปใน price ต้องทำยังไง
