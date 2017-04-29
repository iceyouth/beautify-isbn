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


## Usage

```javascript
// using ES6+
import { validate, hyphenate, dehyphenate } from 'beautify-isbn'

const isbn13 = '9780753555200'
const isbn10 = '0753555200'

console.log(validate(isbn13)) // true
console.log(validate(isbn10)) // true

console.log(hyphenate(isbn13)) // 978-0-7535-5520-0
console.log(hyphenate(isbn10)) // 0-7535-5520-0

const hyphenatedIsbn13 = '978-0-7535-5520-0'
const hyphenatedIsbn10 = '0-7535-5520-0'

console.log(dehyphenate(hyphenatedIsbn13)) // 9780753555200
console.log(dehyphenate(hyphenatedIsbn10)) // 0753555200
```


## Support
Currently support ISBN for
* English Language
* French Language
* German Language
* Brazil
* China (People's Republic)
* Colombia
* France
* Hong Kong (China)
* India
* Japan
* Kazakhstan
* Myanmar
* Singapore

## License
[MIT](./LICENSE)
