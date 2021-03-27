# cls

A simple utility for conditionally joining `className` strings. Also serves as a faster and smaller drop-in replacement for the `classnames` module.

## Install

```bash
# With NPM
$ npm install --save @jikanban/cls

# With Yarn
$ yarn add @jikanban/cls
```

## Usage

```typescript
import cls from '@jikanban/cls'

cls('foo', 'bar')
// => 'foo bar'

cls('foo', { bar: true })
// => 'foo bar'

cls({'foo-bar': true})
// => 'foo-bar'

cls({'foo-bar': false})
// => ''

cls({foo: true}, {bar: true})
// => 'foo bar'

cls({ foo: true, bar: true })
// => 'foo bar'

cls('foo', { bar: true, duck: false }, 'baz', { quux: true })
// => 'foo bar baz quux'

cls(null, false, 'bar', undefined, 0, 1, { baz: null }, '')
// => 'bar 1'
```
