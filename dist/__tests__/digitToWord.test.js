"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
describe('digitToWord', function () {
    test('converts numbers less than 100 correctly', function () {
        expect((0, index_1.digitToWordNe)(0)).toBe('शून्य');
        expect((0, index_1.digitToWordNe)(5)).toBe('पाँच');
        expect((0, index_1.digitToWordNe)(99)).toBe('उनान सय');
    });
    test('converts numbers in hundreds correctly', function () {
        expect((0, index_1.digitToWordNe)(100)).toBe('एक सय');
        expect((0, index_1.digitToWordNe)(215)).toBe('दुई सय पन्ध्र');
        expect((0, index_1.digitToWordNe)(999)).toBe('नौ सय उनान सय');
    });
    test('converts numbers in thousands correctly', function () {
        expect((0, index_1.digitToWordNe)(1000)).toBe('एक हजार');
        expect((0, index_1.digitToWordNe)(2500)).toBe('दुई हजार पाँच सय');
        expect((0, index_1.digitToWordNe)(999999)).toBe('नौ लाख उनान सय हजार नौ सय उनान सय');
    });
    test('converts numbers in millions correctly', function () {
        expect((0, index_1.digitToWordNe)(1000000)).toBe('दस लाख');
        expect((0, index_1.digitToWordNe)(2500000)).toBe('पच्चीस लाख');
        expect((0, index_1.digitToWordNe)(99999999)).toBe('नौ करोड उनान सय लाख उनान सय हजार नौ सय उनान सय');
    });
    test('converts numbers in billions correctly', function () {
        expect((0, index_1.digitToWordNe)(1000000000)).toBe('एक अरब');
        expect((0, index_1.digitToWordNe)(2500000000)).toBe('दुई अरब पचास करोड');
        expect((0, index_1.digitToWordNe)(999999999999)).toBe('नौ सय उनान सय अरब उनान सय करोड उनान सय लाख उनान सय हजार नौ सय उनान सय');
    });
    test('converts numbers in trillions correctly', function () {
        expect((0, index_1.digitToWordNe)(1000000000000)).toBe('Number not supported');
    });
});
