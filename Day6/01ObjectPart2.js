var User = {
    name: "",
    getUserName : function (){
        console.log(`User name is : ${this.name}`);
    },
};

var kapil = Object.create(User);
console.log(kapil);//gives empty object {}

kapil.name = "Kapil";
kapil.getUserName();//Kapil


var sam =Object.create(User, {
    name: { value:"sammy"},
    courseCount: {value: 3},
});

sam.getUserName();

//READ MDN Docs For More Spend some time their
