function naam() {
    var person = prompt("Wat is je naam?", "Naam");
    if (person != null) {
        document.getElementById("begroeting").innerHTML =
            "Hoi " + person + "! Welkom bij guess the number!";
    }
}

const randomNumber = Math.floor(Math.random() * 25) + 1
console.log('Random nummer', randomNumber)

function checkGuess() {
    let myGuess = guess.value
    if (myGuess > randomNumber) {
        result.textContent = "Je keuze is " + myGuess + ", helaas dat is te hoog, probeer opnieuw!"
    } else if (myGuess < randomNumber) {
        result.textContent = "Je keuze is " + myGuess + ", helaas dat is te laag, probeer opnieuw!"
    } else if (myGuess == randomNumber) {
        result.textContent = "Gefeliciteerd je hebt gewonnen, bedankt dat je het tegen mij hebt opgenomen!"
    }
}
document.addEventListener('click', checkGuess)