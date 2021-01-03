var num1 = 7;
var num2 = 4;

console.log(num1 * num2);

var answer = num1 > num2;

console.log(answer);// true



var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice)/listingPrice) * 100

console.log("Percentage is:" + discountPercent);

displayDiscount = Math.round(discountPercent);
console.log(displayDiscount +"% off");