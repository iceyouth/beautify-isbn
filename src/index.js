const rangeList = {
  '0': [
    ['00', '19'],
    ['200', '227'],
    ['2280', '2289'],
    ['229', '647'],
    ['6480000', '6489999'],
    ['649', '699'],
    ['7000', '8499'],
    ['85000', '89999'],
    ['900000', '949999'],
    ['9500000', '9999999'],
  ],
  '1': [
    ['00', '09'],
    ['100', '399'],
    ['4000', '5499'],
    ['55000', '73199'],
    ['7320000', '7399999'],
    ['74000', '77499'],
    ['7750000', '7753999'],
    ['77540', '86979'],
    ['869800', '972999'],
    ['9730', '9877'],
    ['987800', '998999'],
    ['9990000', '9999999'],
  ],
}

const regex = /^(978|979|)(\d{9}[\dX])$/

export const validate = (isbn) => {
  const rawIsbn = deformat(isbn)
  return regex.test(rawIsbn)
}

export const format = (isbn) => {
  if (isbn.match(regex)) {
    if (isbn.length === 13) return `${RegExp.$1}-${splitToArray(RegExp.$2).join('-')}`
    if (isbn.length === 10) return splitToArray(RegExp.$2).join('-')
  }
  return isbn
}

export const deformat = (i_s_b_n) => {
  return i_s_b_n.split('-').join('')
}

const splitToArray = (isbn10) => {
  const group = isbn10.charAt(0)
  const checkDigit = isbn10.charAt(9)
  const rest = isbn10.slice(1, 9)
  const ranges = rangeList[group]
  const { publisher, title } = splitPublisherAndTitle(rest, ranges)
  return [ group, publisher, title, checkDigit ]
}

const splitPublisherAndTitle = (rest, ranges) => {
  const range = ranges
    .find((range) => {
      const length = range[0].length
      const publisher = rest.slice(0, length)
      return (range[0] <= publisher && range[1] >= publisher)
    })

  const length = range[0].length
  return { publisher: rest.slice(0, length), title: rest.slice(length) }
}
