import {digitToWordEn} from '../index'

describe('digitToWordEn', () => {
    test('converts numbers less than 100 correctly', () => {
        expect(digitToWordEn(0)).toBe('Zero')
        expect(digitToWordEn(5)).toBe('Five')
        expect(digitToWordEn(99)).toBe('Ninety Nine')
    })
    
    test('converts numbers in hundreds correctly', () => {
        expect(digitToWordEn(100)).toBe('One Hundred')
        expect(digitToWordEn(215)).toBe('Two Hundred Fifteen')
        expect(digitToWordEn(999)).toBe('Nine Hundred Ninety Nine')
    })
    
    test('converts numbers in thousands correctly', () => {
        expect(digitToWordEn(1000)).toBe('One Thousand')
        expect(digitToWordEn(2500)).toBe('Two Thousand Five Hundred')
        expect(digitToWordEn(999999)).toBe('Nine Hundred Ninety Nine Thousand Nine Hundred Ninety Nine')
    })
    
    test('converts numbers in millions correctly', () => {
        expect(digitToWordEn(1000000)).toBe('One Million')
        expect(digitToWordEn(2500000)).toBe('Two Million Five Hundred Thousand')
        expect(digitToWordEn(99999999)).toBe('Ninety Nine Million Nine Hundred Ninety Nine Thousand Nine Hundred Ninety Nine')
    })
    
    test('converts numbers in billions correctly', () => {
        expect(digitToWordEn(1000000000)).toBe('One Billion')
        expect(digitToWordEn(2500000000)).toBe('Two Billion Five Hundred Million')
        expect(digitToWordEn(999999999999)).toBe('Nine Hundred Ninety Nine Billion Nine Hundred Ninety Nine Million Nine Hundred Ninety Nine Thousand Nine Hundred Ninety Nine')
    })
    
    test('converts numbers in trillions correctly', () => {
        expect(digitToWordEn(1000000000000)).toBe('One Trillion')
    })
    })