const  breadPrice = 15.678;
const  meatPrice = 123.965;
const  cheesePrice = 90.2345;

const maxPrice = Math.max(breadPrice,meatPrice,cheesePrice);
console.log(maxPrice);
const minPrice = Math.min(breadPrice,meatPrice,cheesePrice);
console.log(minPrice);
 
const allSumPrice = breadPrice + meatPrice + cheesePrice;
console.log(allSumPrice);

const floorBreadPrice = Math.floor(breadPrice);
const floorMeatPrice = Math.floor(meatPrice);
const floorCheesePrice = Math.floor(cheesePrice);
const allFloorSumPrice = floorBreadPrice + floorMeatPrice + floorCheesePrice;
console.log(Math.floor(allFloorSumPrice));

const roundAllSumPrice = Math.round(allSumPrice  / 100) * 100;
console.log(roundAllSumPrice);
 
let isEven = Boolean();
    if (allFloorSumPrice % 2 === 0) {
        isEven = true;
    }
   else {
isEven = false;
}
console.log(isEven);

const clientMoney = 500;
const deliveryOfMoney = clientMoney - allSumPrice ;
console.log(deliveryOfMoney)

const averagePrice = (allSumPrice/3).toFixed(2);
console.log(averagePrice)
 
const discount = Math.floor(Math.random() * 100);
console.log(discount + "%");
const invoice = (allSumPrice - allSumPrice*(discount/100)).toFixed(2);
console.log(invoice);
const netProfit = (allSumPrice/2- invoice).toFixed(2);
console.log(netProfit);