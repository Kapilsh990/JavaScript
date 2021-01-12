//event looping
const uno = () => {
    console.log("i m one");
};

const dos = () => {
    setTimeout( () => {
        console.log("whoooooo");
    },3000);
    console.log("i am two");
};

const tres = () => {
    console.log("i am three");
};

uno();
dos();
tres();
