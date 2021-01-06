const myStates = ["Delhi","Goa","Mumbai",1947,"TamilNadu","Assam"];

 myStates.forEach( (s) => (console.log(s)));

 // foreach , forin , forof more loops available is ES6 new in JS

const names = ["Youtube","Google","Amazon","Facebook","Netflix"];

for(const n of names){
    console.log(n);
}//for of loops for arrays 


const symbols = {
    yt: "youtube",
    ig: "instagram",
    fb: "facebook",
    lco: "learncodeonline",
};

for (const n in symbols) {
    console.log(`Key is ${n} and value is ${symbols[n]}`);
}  //for in loops for objects 





