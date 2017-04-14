import test from 'ava'
import { validate, format, deformat } from '../src/index'

const valid_isbn13_978 = '9780753555200'
const valid_isbn13_978_X = '978075355520X'
const valid_isbn13_979 = '9790753555200'
const valid_isbn13_979_X = '979075355520X'

const valid_isbn10 = '0753555200'
const valid_isbn10_X = '075355520X'

const invalid_isbn = '9770753555200'

const i_s_b_n13 = '978-0-75355520-0'
const i_s_b_n10 = '0-75355520-0'


/** test validate **/

test('Validate valid 978 isbn13', t => {
  t.true(validate(valid_isbn13_978))
})

test('Validate valid 978 isbn13 ends with X', t => {
  t.true(validate(valid_isbn13_978_X))
})

test('Validate valid 979 isbn13', t => {
  t.true(validate(valid_isbn13_979))
})

test('Validate valid 978 isbn13 ends with X', t => {
  t.true(validate(valid_isbn13_979_X))
})

test('Validate valid isbn10', t => {
  t.true(validate(valid_isbn10))
})

test('Validate valid isbn10 ends with X', t => {
  t.true(validate(valid_isbn10_X))
})

/** test format **/

test('Format valid 978 isbn13', t => {
  t.is(format(valid_isbn13_978), '978-0-7535-5520-0')
})

test('Format valid 978 isbn13 ends with X', t => {
  t.is(format(valid_isbn13_978_X), '978-0-7535-5520-X')
})

test('Format valid 979 isbn13', t => {
  t.is(format(valid_isbn13_979), '979-0-7535-5520-0')
})

test('Format valid 979 isbn13 ends with X', t => {
  t.is(format(valid_isbn13_979_X), '979-0-7535-5520-X')
})

test('Format valid isbn10', t => {
  t.is(format(valid_isbn10), '0-7535-5520-0')
})

test('Format valid isbn10 ends with X', t => {
  t.is(format(valid_isbn10_X), '0-7535-5520-X')
})

test('Format valid isbn13 with 912345 publisher', t => {
  t.is(format('9781912345780'), '978-1-912345-78-0')
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

test('Deformat non-formatted isbn', t => {
  t.is(deformat('9780753555200'), '9780753555200')
})
