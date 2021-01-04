var num = 2;//Global context

function sayMe() {
    console.log ("hello");
}

sayMe();//Execution contetx

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill +5);
}
tipper(5);
tipper("5");//without parseInt giving output 55


//Function declaration are scanned and made available
//Variable declaration are scanned and made undefined 
var bigTipper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 15);
};

bigTipper("200"); // if we call function above the fuction declaration we get an error 


console.log(name);
var name = "kapil";//undefined for these two lines


function sayName(){
    var name = "Mr X";
    console.name(name);
}

sayName();//Mr X

console.log(name); //kapil