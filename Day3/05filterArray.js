var testArray = [2,4,6,7,8,4,9];

console.log(testArray.fill(0));//it fills the all array with the passing value
console.log(testArray.fill("h",2));//it fills the all array with the passing value from  the 2 th index of array
console.log(testArray.fill("h",2,5));//it fills the all array with the passing value from  the 2 th index of array and before the the 5 th index

const nyNumber = [23,43,45,652,223,32,654];

const result = myNumber.filter( (num ) => num!=652);

console.log(result);//delete the 652 value from array


var users = ["kapil","nitin","naveen","goldy","biswass"];

console.log(users.slice(1,3));//strat from 1 index to 2 index and slice it

users.splice(1,2,"Hi");//start from 1 and count 2 than splice it and add hi between the count of index
console.log(users)