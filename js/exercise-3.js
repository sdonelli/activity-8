console.log("Exersice 3");

/* Global variables */
var months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

/* Display months */
console.log("Month 5: " + months[4] + " Month 11: " + months[10]);

/* Display months using sort */
console.log(months.sort());

/* Include new elements into the array */
months.unshift("Julia");
months.push("Jorge");
console.log(months);

/* Remove elements from the array */
months.shift("Julia");
months.pop("Jorge");
console.log(months);

/* Display months using revert */
console.log(months.reverse());

/* Display months joined by - */
console.log(months.join("-"));

/* Display a sub-array */
var myMonths = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
var mayIndex = myMonths.findIndex(checkMayMonth);
var novIndex = myMonths.findIndex(checkNovMonth);
console.log(myMonths.slice(mayIndex, novIndex));

/* Util methods */
function checkMayMonth(strMonth) {
    return strMonth == "Mayo";
}

function checkNovMonth(strMonth) {
    return strMonth == "Noviembre";
}
