const {roundToNDecimals, fromYanToEuro, fromDollarToEuro, fromDollarToYen, fromEuroToDollar, fromYanToPound} = require("./app");

test("0.123456 must be 0.12 rounded to 2 decimals", ()=>{
    const result = roundToNDecimals(0.123456,2)
    expect(result).toBe(0.12)
})

test("0.987654 must be 0.99 rounded to 2 decimals", ()=>{
    const result = roundToNDecimals(0.987654,2)
    expect(result).toBe(0.99)
})

test("2 Yan must be 0,02€", () => {
    const yan = fromYanToEuro(2);
    expect(yan).toBe(0.02);
});

test("2 dollar must be 1,67€", () => {
    const euro = fromDollarToEuro(2);
    expect(euro).toBe(1.67);
})

test("2 dollar must be 213,59JPY", ()=>{
    const yan = fromDollarToYen(2);
    expect(yan).toBe(213.59);
})

test("2€ must be 2,40$",()=>{
    const dollars = fromEuroToDollar(2);
    expect(dollars).toBe(2.40);
})

test("2JPY must be 0,01GBP", ()=>{
    const pounds = fromYanToPound(2);
    expect(pounds).toBe(0.02);
})