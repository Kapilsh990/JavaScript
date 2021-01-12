// {} scope but for js fn is scope

// var keyword not gives error which is good but for backend or sensitive places we want error so we use let keyword

if (true) {
    var name = "kapil";
}
console.log(name);//kapil

if (true) {
    let name = "kapil";
}
console.log(name);//error
