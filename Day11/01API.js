fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        var joke = data.value;
        console.log("JOKE:", joke);  
    })
.catch()



// this code is not gonna run on node try it on console.