const courses = [
    {
        name: "MBBS",
        star: "5"
    },
    {
        name: "Mtech",
        star: "3"
    },
    {
        name: "BCA",
        star: "4"
    },
    {
        name: "BBA",
        star: "5"
    },
    {
        name: "MASS COMMUNICATION",
        star: "4"
    },
];

function generateList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach( course => {

        const li = document.createElement("li");
        li.classList.add("list-group-item");
        const name = document.createTextNode(course.name);
        li.appendChild(name);


        const span = document.createElement("span");
        span.classList.add("float-right");
        const star = document.createTextNode(course.star + "Star");
        span.appendChild(star);

        li.appendChild(span);
        ul.appendChild(li);
    });
}

// generateList();

window.addEventListener("load" , generateList);

const button = document.querySelector(".sort-btn")

button.addEventListener("click" , () => {
    courses.sort( (a,b) => a.star -b.star);
    generateList();
})

const buttons = document.querySelector(".unsort-btn")

buttons.addEventListener("click" , () => {
    courses.sort( (a,b) => b.star -a.star);
    generateList();
})