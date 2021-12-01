const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
console.log(color);

//get random number between 0-3
function getrandomNumber() {
    return Math.floor(Math.random() * 4);
}

btn.addEventListener('click', function () {
    var randomNumber = getrandomNumber();
    document.body.style.backgroundColor = colors[randomNumber]; //change background color
    color.textContent = colors[randomNumber];   //change text content
});