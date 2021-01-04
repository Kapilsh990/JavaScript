function sayHello(){
    console.log("Hello there, Kapil");
}

sayHello();//calling a function
sayHello;//refrence a function

function sayHello(name){
    console.log("Hello there, ", name );
    console.log(`Hello there ,${name}. How are you?`)
}

sayHello("kapil");

function namesty() {
    return "Hello in India";
}

var greetings = namesty();
console.log(greetings);

