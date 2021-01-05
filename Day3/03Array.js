var countries = ["India","USA","Japan","Russia"];

var states = new Array("Delhi","Mumbai","Rajasthan","Kashmir");

console.log(states[0]);

console.log(states.length);

states[1] = "Goa"; //replace value
console.log(states);

var user =["KApil","kapil0559@gmail.com",3,35,true];
console.log(user);//gives output but no a good idea

user.pop();
console.log(user);//true gone or last element pop

user.unshift("New value");
console.log(user);//add value in front of array

user.shift();
console.log(user); //remove unshift value or from front of array

console.log(user.indexOf(3));//index of element
//if u find a value not their in array than it gives -1 as output

console.log(Array.from("Kapil"))//iterate into an array