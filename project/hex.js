const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

function getrandomNumber() {
    let result = [];
    for (let i = 0; i < 6; i++) {
        result+=(hex[Math.floor(Math.random() * 16)]);
    }
    return "#"+result;
}

btn.addEventListener("click", function () {
    var randomcolorcode = getrandomNumber();
    document.body.style.backgroundColor = randomcolorcode;
    color.textContent = randomcolorcode;
    console.log(randomcolorcode);
});