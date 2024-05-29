"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitToWordEn = exports.digitToWordNe = void 0;
var numberTexts_1 = require("./numberTexts");
var digitToWordNe = function (n) {
    if (n < 100) {
        return numberTexts_1.nepaliWords[n];
    }
    else if (n < 1000) {
        // Handle numbers in hundreds
        var hundreds = Math.floor(n / 100);
        var remainder = n % 100;
        return numberTexts_1.nepaliWords[hundreds] + ' सय' + (remainder !== 0 ? ' ' + (0, exports.digitToWordNe)(remainder) : '');
    }
    else if (n < 100000) {
        // Handle numbers in thousands
        var thousands = Math.floor(n / 1000);
        var remainder = n % 1000;
        return (0, exports.digitToWordNe)(thousands) + ' हजार' + (remainder !== 0 ? ' ' + (0, exports.digitToWordNe)(remainder) : '');
    }
    else if (n < 10000000) {
        // Handle numbers in millions
        var millions = Math.floor(n / 100000);
        var remainder = n % 100000;
        return (0, exports.digitToWordNe)(millions) + ' लाख' + (remainder !== 0 ? ' ' + (0, exports.digitToWordNe)(remainder) : '');
    }
    else if (n < 1000000000) {
        // Handle numbers in billions
        var billions = Math.floor(n / 10000000);
        var remainder = n % 10000000;
        return (0, exports.digitToWordNe)(billions) + ' करोड' + (remainder !== 0 ? ' ' + (0, exports.digitToWordNe)(remainder) : '');
    }
    else if (n < 1000000000000) {
        // Handle numbers in trillions
        var trillions = Math.floor(n / 1000000000);
        var remainder = n % 1000000000;
        return (0, exports.digitToWordNe)(trillions) + ' अरब' + (remainder !== 0 ? ' ' + (0, exports.digitToWordNe)(remainder) : '');
    }
    return 'Number not supported';
};
exports.digitToWordNe = digitToWordNe;
var digitToWordEn = function (num) {
    if (num === 0)
        return 'zero';
    else if (num < 20)
        return numberTexts_1.ones[num];
    else if (num < 100) {
        return numberTexts_1.tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' + numberTexts_1.ones[num % 10] : '');
    }
    else if (num < 1000) {
        return numberTexts_1.ones[Math.floor(num / 100)] + ' Hundred' + (num % 100 !== 0 ? ' And ' + (0, exports.digitToWordEn)(num % 100) : '');
    }
    else if (num < 1000000)
        return ((0, exports.digitToWordEn)(Math.floor(num / 1000)) + ' Thousand' + (num % 1000 !== 0 ? ' ' + (0, exports.digitToWordEn)(num % 1000) : ''));
    else if (num < 1000000000)
        return ((0, exports.digitToWordEn)(Math.floor(num / 1000000)) +
            ' Million' +
            (num % 1000000 !== 0 ? ' ' + (0, exports.digitToWordEn)(num % 1000000) : ''));
    else if (num < 1000000000000)
        return ((0, exports.digitToWordEn)(Math.floor(num / 1000000000)) +
            ' Billion' +
            (num % 1000000000 !== 0 ? ' ' + (0, exports.digitToWordEn)(num % 1000000000) : ''));
    else if (num < 1000000000000000)
        return ((0, exports.digitToWordEn)(Math.floor(num / 1000000000000)) +
            ' Trillion' +
            (num % 1000000000000 !== 0 ? ' ' + (0, exports.digitToWordEn)(num % 1000000000000) : ''));
    return 'Number out of range';
};
exports.digitToWordEn = digitToWordEn;
