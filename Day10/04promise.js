const uno = () => {
    return "i m one";
};

// const dos = () => {
//     setTimeout( () => {
//         return "i am two";
//     },3000);
// };

const dos = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("I am two");
        },3000);
    })
};

const tres = () => {
    return "i am three";
};

const callMe = async () => {
    let valone = uno();
    console.log(valone);

    let valtwo = await dos();
    console.log(valtwo);

    let valthree = tres();
    console.log(valthree);
};

callMe();