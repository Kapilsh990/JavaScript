// for (let i = 0; i < 10; i++) {
//     console.log(i);  
// }

const myStates = ["Delhi","Goa","Mumbai",1947,"TamilNadu","Assam"];

// for (let i= 0; i < myStates.length;i++){
//     if(typeof myStates[i] !== "states") break; 
//     console.log(myStates[i]);
// }

let i = 0;

while(i < myStates.length) {
    console.log(myStates[i]);
    i++;
}

let i = 0 ;

do{
    console.log(i);
    i++;
} while(i<10);