console.log("Exersice 2"); 

/* Uppercase of an string */
var strLowercase = "javascript";
var strUppercase = strLowercase.toUpperCase();
console.log(strUppercase); 

/* Substring */
var str1 = "javascript";
var subStr = str1.substr(0, 5);
console.log(subStr); 

/* Substring with last 3 characters */
var str1 = "javascript";
var strLength = str1.length;
var subStr = str1.substr((strLength - 3), strLength);
console.log(subStr); 

/* Substring with uppercase and lowercase */
var str1 = "javaSCRIPT";
var strLength = str1.length;
var firstLetter = str1.substr(0, 1);
var firstLetterToUpper = firstLetter.toUpperCase();
var lowerText = str1.substr(1, strLength).toLowerCase();
var result = firstLetterToUpper + lowerText;
console.log(result); 

/* Find the first space in the text */
var strWithSpaces = "Hello, my name is...";
var spaceIndex = strWithSpaces.indexOf(" ", 0);
console.log(spaceIndex); 

/* Uppercase the first letter of two strings */
var twoStringWithSpaces = "javaScript aWesome";
var txtToLowercases = twoStringWithSpaces.toLowerCase();
var spaceIndex = txtToLowercases.indexOf(" ", 0);

var firstWord = txtToLowercases.substr(0, spaceIndex);
var firstLetterOfFirstWordToUpper = getFirtLetterToUpper(firstWord);

var secondWord = txtToLowercases.substr((spaceIndex + 1), txtToLowercases.length);
var firstLetterOfSecondWordToUpper = getFirtLetterToUpper(secondWord);

var subTxtFromFirstWord = firstWord.substr(1, firstWord.length);
var subTxtFromSecondWord = secondWord.substr(1, secondWord.length);

var result = firstLetterOfFirstWordToUpper 
    + subTxtFromFirstWord 
    + " " 
    + firstLetterOfSecondWordToUpper 
    + subTxtFromSecondWord;
console.log(result); 

/* Util methods */
function getFirtLetterToUpper(inputString) {
    return inputString.substr(0, 1).toUpperCase();
}