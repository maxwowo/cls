# cls

A simple utility for conditionally joining `className` strings. Also serves as a smaller drop-in replacement for the `classnames` package.

## Install

```bash
# With NPM
$ npm install --save @maxwowo/cls

# With Yarn
$ yarn add @maxwowo/cls
```

## Usage

```typescript
import cls from '@maxwowo/cls'

cls('foo', 'bar')
// => 'foo bar'

cls('foo', { bar: true })
// => 'foo bar'

cls({ 'foo-bar': true })
// => 'foo-bar'

cls({ 'foo-bar': false })
// => ''

cls({ foo: true }, { bar: true })
// => 'foo bar'

cls({ foo: true, bar: true })
// => 'foo bar'

cls('foo', { bar: true, duck: false }, 'baz', { quux: true })
// => 'foo bar baz quux'

cls(null, false, 'bar', undefined, 0, 1, { baz: null }, '')
// => 'bar 1'
```
