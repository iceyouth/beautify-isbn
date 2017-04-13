import test from 'ava'
import { format, deformat } from '../src/index'

const valid_isbn13_978 = '9780753555200'
const valid_isbn13_978_X = '978075355520X'
const valid_isbn13_979 = '9790753555200'
const valid_isbn13_979_X = '979075355520X'

const valid_isbn10 = '0753555200'
const valid_isbn10_X = '075355520X'

const invalid_isbn = '9770753555200'

const i_s_b_n13 = '978-0-75355520-0'
const i_s_b_n10 = '0-75355520-0'

test('Format valid 978 isbn13', t => {
  t.is(format(valid_isbn13_978), '978-0-75355520-0')
})

test('Format valid 978 isbn13 ends with X', t => {
  t.is(format(valid_isbn13_978_X), '978-0-75355520-X')
})

test('Format valid 979 isbn13', t => {
  t.is(format(valid_isbn13_979), '979-0-75355520-0')
})

test('Format valid 979 isbn13 ends with X', t => {
  t.is(format(valid_isbn13_979_X), '979-0-75355520-X')
})

test('Format valid isbn10', t => {
  t.is(format(valid_isbn10), '0-75355520-0')
})

test('Format valid isbn10 ends with X', t => {
  t.is(format(valid_isbn10_X), '0-75355520-X')
})

test('Format invalid isbn', t => {
  t.is(format(invalid_isbn), '9770753555200')
})

/** test deformat **/

test('Deformat isbn13', t => {
  t.is(deformat(i_s_b_n13), '9780753555200')
})

test('Deformat isbn10', t => {
  t.is(deformat(i_s_b_n10), '0753555200')
})
