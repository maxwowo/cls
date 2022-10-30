import cls from '../src'

describe('cls', () => {
  it('keeps object keys with truthy values', () => {
    expect(
      cls({
        a: true,
        b: false,
        c: 0,
        d: null,
        e: undefined,
        f: 1,
      })
    ).toBe('a f')
  })

  it('joins arrays of class names and ignore falsy values', () => {
    expect(cls('a', 0, null, undefined, true, 1, 'b')).toBe('a 1 b')
  })

  it('supports heterogenous arguments', () => {
    expect(cls({ a: true }, 'b', 0)).toBe('a b')
  })

  it('should be trimmed', () => {
    expect(cls('', 'b', {}, '')).toBe('b')
  })

  it('returns an empty string for an empty configuration', () => {
    expect(cls({})).toBe('')
  })

  it('supports an array of class names', () => {
    expect(cls(['a', 'b'])).toBe('a b')
  })

  it('joins array arguments with string arguments', () => {
    expect(cls(['a', 'b'], 'c')).toBe('a b c')
    expect(cls('c', ['a', 'b'])).toBe('c a b')
  })

  it('handles multiple array arguments', () => {
    expect(cls(['a', 'b'], ['c', 'd'])).toBe('a b c d')
  })

  it('handles arrays that include falsy and true values', () => {
    expect(cls(['a', 0, null, undefined, false, true, 'b'])).toBe('a b')
  })

  it('handles arrays that include arrays', () => {
    expect(cls(['a', ['b', 'c']])).toBe('a b c')
  })

  it('handles arrays that include objects', () => {
    expect(cls(['a', { b: true, c: false }])).toBe('a b')
  })

  it('handles deep array recursion', () => {
    expect(cls(['a', ['b', ['c', { d: true }]]])).toBe('a b c d')
  })

  it('handles arrays that are empty', () => {
    expect(cls('a', [])).toBe('a')
  })

  it('handles nested arrays that have empty nested arrays', () => {
    expect(cls('a', [[]])).toBe('a')
  })

  it('handles all types of truthy and falsy property values as expected', () => {
    expect(
      cls({
        // Falsy
        null: null,
        emptyString: '',
        noNumber: NaN,
        zero: 0,
        negativeZero: -0,
        false: false,
        undefined: undefined,

        // Truthy
        nonEmptyString: 'foobar',
        whitespace: ' ',
        function: Object.prototype.toString,
        emptyObject: {},
        nonEmptyObject: { a: 1, b: 2 },
        emptyList: [],
        nonEmptyList: [1, 2, 3],
        greaterZero: 1,
      })
    ).toBe(
      'nonEmptyString whitespace function emptyObject nonEmptyObject emptyList nonEmptyList greaterZero'
    )
  })
})
