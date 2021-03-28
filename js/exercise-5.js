console.log("Exersice 5");

/* Global variables */
var names = [
    "john",
    "jorge",
    "wayne",
    "julia",
    "ryan"
 ];

/* Display alert for each element in the array */
console.log(names);
names.forEach(displayAlert);

function displayAlert(name) {
    alert(name);
}

/* Display alert for each element in the array with first letter in uppercase */
names.forEach(displayAlertWithFirstLetterInUppercase);

function displayAlertWithFirstLetterInUppercase(name) {
    var firstLetterToUpper = name.substr(0, 1).toUpperCase();
    var nameWithoutFirstLetter = name.substr(1, name.length);
    alert(firstLetterToUpper + nameWithoutFirstLetter);
}

/* Display alert with concat array elements */
var sentence = "";
for (let index = 0; index < names.length; index++) {
    sentence = sentence.concat(names[index]);
}
alert(sentence);

/* Log array after push numbers with a for */
var myArray = [];
for (let index = 0; index < 10; index++) {
    myArray.push(index);
}
console.log(myArray);
