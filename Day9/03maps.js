var myMap = new Map();

myMap.set(1,"UNO");
myMap.set(2,"Dos");
myMap.set(3,"Tres");
myMap.set(4,"Cuatro");

console.log(myMap);

for(let key of myMap.key()) {         // for values key = value keys() =values()
    console.log(`key is ${key}`);
}

for(let [key,value] of myMap.key()) {  
    console.log(`key is ${key} and Value is ${value}`);
}

myMap.forEach((key) => console.log(`${key}`));// it gives value and if u write value than also gonna give values

myMap.forEach((k,v) => console.log(`${k} and ${v}`));
