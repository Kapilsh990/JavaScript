//...args //... spread operator and rest operator 

var myObj = {};

Object.assign(myObj,{a:1,b:2,c:3},{d:4,e:5,f:6});
console.log(myObj);

function sumOne(a,b) {
    return a + b;
}

var myAry = [5,3];
console.log(sumOne(5,3));//8
console.log(sumOne(...myAry));//8 spread Operator

function sumTwo(...args)//rest operator { // when you have many or unkown args
{
    let sum = 0;
    for(const arg of args) {
        sum+=arg;
    }
    return sum;
}

console.log(sumTwo(3,5));//8
console.log(sumTwo(3,5,10));//18