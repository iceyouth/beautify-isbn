import { groupRange, publisherRange } from './range'

const regex = /^(978|979|)(\d{9})([\dX])$/

export const validate = (rawIsbn) => {
  const isbn = dehyphenate(rawIsbn)
  return regex.test(isbn)
}

export const dehyphenate = (i_s_b_n) => {
  return i_s_b_n.split('-').join('')
}

export const hyphenate = (rawIsbn) => {
  const isbn = dehyphenate(rawIsbn)
  if (validate(isbn)) {
    const beautifiedIsbn = [isbn]
      .map(splitEanAndCheckDigit)
      .map(splitGroup)
      .map(splitPublisher)
      .map(joinWithHyphen)

    return beautifiedIsbn[0]
  }
  return rawIsbn
}

const splitEanAndCheckDigit = (isbn) => {
  if(isbn.match(regex)) {
    return [RegExp.$1, RegExp.$2, RegExp.$3]
  }
}

const splitGroup = (array) => {
  const [ean, rest, checkDigit] = array
  const ranges = groupRange[ean || '978']
  return [ean, ...findInRange(rest, ranges), checkDigit]
}

const splitPublisher = (array) => {
  const [ean, group, rest, checkDigit] = array
  const ranges = publisherRange[group]
  return [ean, group, ...findInRange(rest, ranges), checkDigit]
}

const findInRange = (rest, ranges) => {
  const range = ranges
    .find((range) => {
      const l = range[0].length
      const g = rest.slice(0, l)
      return (range[0] <= g && range[1] >= g)
    })
  const length = range[0].length
  return [rest.slice(0, length), rest.slice(length)]
}

const joinWithHyphen = (array) => {
  return array[0]
    ? array.join('-')
    : `${array[1]}-${array[2]}-${array[3]}-${array[4]}`
}
