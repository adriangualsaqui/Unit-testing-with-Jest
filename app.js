let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

/**
 * Recives a number and return a float rounded to n decimals.
 * @param {number} float 
 * @param {number} n 
 * @returns {number}
 */
function roundToNDecimals(number,n) {
    return Math.round(number * 10**n)/10**n;
}

/**
 * Return equivalent value in € for JPY value provided.
 * @param {number} yan 
 * @returns {number}
 */
function fromYanToEuro(yan) {
    return roundToNDecimals(yan / oneEuroIs["JPY"], 2);
}

/**
 * Return equivalent value in € for $ value provided.
 * @param {number} dollar 
 * @returns {number}
 */
function fromDollarToEuro(dollar) {
    return roundToNDecimals(dollar / oneEuroIs["USD"], 2);
}

/**
 * Return equivalent value in JPY for $ value provided.
 * @param {number} dollar 
 * @returns {number}
 */
function fromDollarToYen(dollar){
    return roundToNDecimals(fromDollarToEuro(dollar) * oneEuroIs["JPY"],2);
}

/**
 * Return equivalent value in $ for € value provided.
 * @param {number} euros 
 * @returns {number}
 */
function fromEuroToDollar(euros){
    return roundToNDecimals(euros * oneEuroIs["USD"],2);
}

/**
 * Return equivalent value in GBP for JPY value provided.
 * @param {number} yan 
 * @returns {number}
 */
function fromYanToPound(yan){
    return roundToNDecimals(fromYanToEuro(yan) * oneEuroIs["GBP"],2);
}

module.exports = {roundToNDecimals, fromYanToEuro, fromDollarToEuro, fromDollarToYen, fromEuroToDollar, fromYanToPound};