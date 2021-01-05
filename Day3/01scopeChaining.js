var naem = "Kapil";

console.log("Line number 3", naem);//KApil

function sayName() {
    var naem = "Mr X";
    console.log("Line number 7", naem);//MR X
    sayNameTwo();

    function sayNameTwo(){
        console.log("Line number 11", naem);//Mr X
    }
}

sayName();