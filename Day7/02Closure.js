// function init() {
//     var firstName = "kapil";
//     function sayFirstname() {
//         console.log(firstName);
//     }
//     sayFirstname;
// }

// var value = init();

// value();//by this way u call the firstName


function doAddition(x){
    return function(y){
        return x + y;
    }
}
var add5 = doAddition(5);//not gonna give addition
console.log(add(7));// 12   add5 hold the refrence of function 

console.log(doAddition(6)(9));//15 curring or closure
