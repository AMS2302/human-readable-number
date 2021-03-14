module.exports = function toReadable(number) {
    let min = [];
    min = ["zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"];
    if (number < 20) {
        return min[number];
    }
    let tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    if (number < 100) {
        if (number % 10 == 0) {
            return tens[(number / 10) - 2];
        }
        else {
            return tens[Math.floor(number / 10) - 2] + " " + min[number % 10];
        }
    }
    else {
        if (number % 100 == 0) {
            return min[Math.floor(number / 100)] + " hundred";
        }
        if (number % 100 < 20) {
            return min[Math.floor(number / 100)] + " hundred " + min[number % 100];
        }
        if (number % 10 == 0) {
            return min[Math.floor(number / 100)] + " hundred " + tens[((number - (Math.floor(number / 100) * 100)) / 10) - 2];
        }
        else {
            return min[Math.floor(number / 100)] + " hundred " + tens[Math.floor((number - ((Math.floor(number / 100) * 100))) / 10) - 2] +" " + 
            min[number % 10];
        }












    }









}
