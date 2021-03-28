console.log("Exersice 4");

/* Random number check if greater than 0,5 */
var randomNumber = Math.random();
console.log(randomNumber);

if (randomNumber >= 0.5) {
    alert("Greater than 0.5");
} else {
    alert("Lower than 0.5");
}

/* Display alert based on the age */
var age = Math.floor(Math.random() * 101);
console.log(age);

if (age < 2) {
    alert("Bebe");
} else if (age <= 12) {
    alert("Nino");
} else if (age <= 19) {
    alert("Adolescente");
} else if (age <= 30) {
    alert("Joven");
} else if (age <= 60) {
    alert("Adulto");
} else if (age <= 75) {
    alert("Adulto mayor");
} else if (age > 75) {
    alert("Anciano");
}
