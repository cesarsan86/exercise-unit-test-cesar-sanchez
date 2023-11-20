//console.log("Hello World")
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3));

//module.exports = { sum };

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}
module.exports = { sum, fromEuroToDollar }


const fromDollarToYen = function(valueInDollar) {
    let valueInYen = (valueInDollar / oneEuroIs.USD) * oneEuroIs.JPY;
    return valueInYen;
}

const fromYenToPound= function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInPound = (valueInYen / oneEuroIs.JPY) * oneEuroIs.GBP;
    // Retornamos el valor en dólares
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound  }