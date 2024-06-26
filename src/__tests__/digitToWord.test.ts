import { digitToWord } from '../index'

describe('digitToWord', () => {
  test('converts numbers less than 100 correctly', () => {
    expect(digitToWord(0)).toBe('शून्य')
    expect(digitToWord(5)).toBe('पाँच')
    expect(digitToWord(99)).toBe('उनान सय')
  })

  test('converts numbers in hundreds correctly', () => {
    expect(digitToWord(100)).toBe('एक सय')
    expect(digitToWord(215)).toBe('दुई सय पन्ध्र')
    expect(digitToWord(999)).toBe('नौ सय उनान सय')
  })

  test('converts numbers in thousands correctly', () => {
    expect(digitToWord(1000)).toBe('एक हजार')
    expect(digitToWord(2500)).toBe('दुई हजार पाँच सय')
    expect(digitToWord(999999)).toBe('नौ लाख उनान सय हजार नौ सय उनान सय')
  })

  test('converts numbers in millions correctly', () => {
    expect(digitToWord(1000000)).toBe('दस लाख')
    expect(digitToWord(2500000)).toBe('पच्चीस लाख')
    expect(digitToWord(99999999)).toBe('नौ करोड उनान सय लाख उनान सय हजार नौ सय उनान सय')
  })

  test('converts numbers in billions correctly', () => {
    expect(digitToWord(1000000000)).toBe('एक अरब')
    expect(digitToWord(2500000000)).toBe('दुई अरब पचास करोड')
    expect(digitToWord(999999999999)).toBe('नौ सय उनान सय अरब उनान सय करोड उनान सय लाख उनान सय हजार नौ सय उनान सय')
  })

  test('converts numbers in trillions correctly', () => {
    expect(digitToWord(1000000000000)).toBe('Number not supported')
  })
})
