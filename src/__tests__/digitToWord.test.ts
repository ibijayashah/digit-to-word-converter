import { digitToWordNe } from '../index'

describe('digitToWord', () => {
  test('converts numbers less than 100 correctly', () => {
    expect(digitToWordNe(0)).toBe('शून्य')
    expect(digitToWordNe(5)).toBe('पाँच')
    expect(digitToWordNe(99)).toBe('उनान सय')
  })

  test('converts numbers in hundreds correctly', () => {
    expect(digitToWordNe(100)).toBe('एक सय')
    expect(digitToWordNe(215)).toBe('दुई सय पन्ध्र')
    expect(digitToWordNe(999)).toBe('नौ सय उनान सय')
  })

  test('converts numbers in thousands correctly', () => {
    expect(digitToWordNe(1000)).toBe('एक हजार')
    expect(digitToWordNe(2500)).toBe('दुई हजार पाँच सय')
    expect(digitToWordNe(999999)).toBe('नौ लाख उनान सय हजार नौ सय उनान सय')
  })

  test('converts numbers in millions correctly', () => {
    expect(digitToWordNe(1000000)).toBe('दस लाख')
    expect(digitToWordNe(2500000)).toBe('पच्चीस लाख')
    expect(digitToWordNe(99999999)).toBe('नौ करोड उनान सय लाख उनान सय हजार नौ सय उनान सय')
  })

  test('converts numbers in billions correctly', () => {
    expect(digitToWordNe(1000000000)).toBe('एक अरब')
    expect(digitToWordNe(2500000000)).toBe('दुई अरब पचास करोड')
    expect(digitToWordNe(999999999999)).toBe('नौ सय उनान सय अरब उनान सय करोड उनान सय लाख उनान सय हजार नौ सय उनान सय')
  })

  test('converts numbers in trillions correctly', () => {
    expect(digitToWordNe(1000000000000)).toBe('Number not supported')
  })
})
