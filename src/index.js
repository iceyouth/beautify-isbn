const rangeList = {
  // English Language
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
  // French Language
  '2': [
    ['00', '19'],
    ['200', '349'],
    ['35000', '39999'],
    ['400', '699'],
    ['7000', '8399'],
    ['84000', '89999'],
    ['900000', '919942'],
    ['9199430', '9199689'],
    ['919969', '949999'],
    ['9500000', '9999999'],
  ],
  // German Language
  '3': [
    ['00', '02'],
    ['030', '033'],
    ['0340', '0369'],
    ['03700', '03999'],
    ['04', '19'],
    ['200', '699'],
    ['7000', '8499'],
    ['85000', '89999'],
    ['900000', '949999'],
    ['9500000', '9539999'],
    ['95400', '96999'],
    ['9700000', '9899999'],
    ['99000', '99499'],
    ['99500', '99999'],
  ],
  // Japan
  '4': [
    ['00', '19'],
    ['200', '699'],
    ['7000', '8499'],
    ['85000', '89999'],
    ['900000', '949999'],
    ['9500000', '9999999'],
  ],
  // Singapore
  '981': [
    ['00', '16'],
    ['17000', '19999'],
    ['200', '299'],
    ['3000', '3099'],
    ['310', '399'],
    ['4000', '9999'],
  ],
  '9971': [
    ['0', '5'],
    ['60', '89'],
    ['900', '989'],
    ['9900', '9999'],
  ],
  // Hong Kong, China
  '962': [
    ['00', '19'],
    ['200', '699'],
    ['7000', '8499'],
    ['85000', '86999'],
    ['8700', '8999'],
    ['900', '999'],
  ],
  '988': [
    ['00', '11'],
    ['12000', '14999'],
    ['15000', '16999'],
    ['17000', '19999'],
    ['200', '769'],
    ['77000', '79999'],
    ['8000', '9699'],
    ['97000', '99999'],
  ],
  // Myanmar
  '99971': [
    ['0', '5'],
    ['60', '84'],
    ['850', '999'],
  ]
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
