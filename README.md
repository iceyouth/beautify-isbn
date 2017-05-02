# beautify-isbn [![npm](https://img.shields.io/npm/v/beautify-isbn.svg?style=flat-square)](https://www.npmjs.com/package/beautify-isbn) [![npm](https://img.shields.io/npm/dt/beautify-isbn.svg?style=flat-square)](https://www.npmjs.com/package/beautify-isbn)
A small package to make ISBN human-readable

## Install
Using [yarn](https://yarnpkg.com/)

```
$ yarn add beautify-isbn
```

Or [npm](https://yarnpkg.com/)

```
$ npm install --save beautify-isbn
```

## Features
* `validate` - Check the validity of ISBN
* `hyphenate` - Hyphenate ISBN so that human can read it
* `dehyphenate` - Remove hyphens so that machine can read it
* `toIsbn13` - Convert ISBN 10 to ISBN 13

## Usage

```javascript
// using ES6+
import { validate, hyphenate, dehyphenate, toIsbn13 } from 'beautify-isbn'

const isbn13 = '9780753555200'
const isbn10 = '0306406152'

console.log(validate(isbn13)) // true
console.log(validate(isbn10)) // true

console.log(hyphenate(isbn13)) // 978-0-7535-5520-0
console.log(hyphenate(isbn10)) // 0-306-40615-2

const hyphenatedIsbn13 = '978-0-7535-5520-0'
const hyphenatedIsbn10 = '0-306-40615-2'

console.log(dehyphenate(hyphenatedIsbn13)) // 9780753555200
console.log(dehyphenate(hyphenatedIsbn10)) // 0306406152

console.log(toIsbn13(isbn10)) // 9780306406157
```


## License
[MIT](./LICENSE)
