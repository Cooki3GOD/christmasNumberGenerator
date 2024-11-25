// consty

const display = document.querySelector("h2 p");
const listOfNumbers = document.querySelectorAll("li");
const button = document.querySelector("button");
const usedNumbers = [];
const numbers = [];

// Funkcje

for(let i = 0; i < listOfNumbers.length; i++) {
    numbers.push(parseInt(listOfNumbers[i].textContent, 10));
}

function getRandomNumber() {
    if(usedNumbers.length == 30) {
        display.innerText = "Nie ma liczb do wylosowania!";
    }
    else {
        let number;
        do {
            let index = Math.floor(Math.random() * numbers.length);
            number = numbers[index];
            listOfNumbers[index].remove();
        }
        while(usedNumbers.includes(number) && listOfNumbers.length != 0);
        usedNumbers.push(number);
        display.innerText  = number;
    }
}

button.addEventListener("click", getRandomNumber);
