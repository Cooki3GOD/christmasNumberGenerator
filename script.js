// consty

const display = document.querySelector("h2 p");
const listOfNumbers = document.querySelectorAll("li");
const button = document.querySelector("button");
const usedNumbers = [];
console.log(listOfNumbers);
// Funkcje

function getRandomNumber() {
    if(listOfNumbers.length == 0) {
        display.innerText = "Wszystkie Numery Zostaly wylosowane!";
    }

    let number;
}

button.addEventListener("click", getRandomNumber);
