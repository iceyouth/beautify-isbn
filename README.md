# beautify-isbn [![npm version](https://badge.fury.io/js/beautify-isbn.svg)](https://badge.fury.io/js/beautify-isbn)
A small package to make ISBN human-readable

## Install
Using [yarn](https://yarnpkg.com/)
```bash
yarn add beautify-isbn
```
Using [npm](https://yarnpkg.com/)
```bash
npm install --save beautify-isbn
```

## Usage
```javascript
// using ES6+
import { validate, format, deformat } from 'beautify-isbn'

const isbn13 = '9780753555200'
const isbn10 = '0753555200'

console.log(validate(isbn13)) // true
console.log(validate(isbn10)) // true

console.log(format(isbn13)) // 978-0-7535-5520-0
console.log(format(isbn10)) // 0-7535-5520-0

const formattedIsbn13 = '978-0-7535-5520-0'
const formattedIsbn10 = '0-7535-5520-0'

console.log(deformat(formattedIsbn13)) // 9780753555200
console.log(deformat(formattedIsbn10)) // 0753555200
```

## License
[MIT](./LICENSE)
