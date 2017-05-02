import test from 'ava'
import { validate, hyphenate, dehyphenate } from '../src/index'

const valid_isbn13_978 = '9780753555200'
const hyphenated_valid_isbn13_978 = '978-0-7535-5520-0'
const valid_isbn13_979 = '9791155310021'
const hyphenated_valid_isbn13_979 = '979-11-5531-002-1'

const valid_isbn10 = '0306406152'
const hyphenated_valid_isbn10 = '0-306-40615-2'
const valid_isbn10_X = '155404295X'
const hyphenated_valid_isbn10_X = '1-55404-295-X'

const invalid_isbn = '9770753555200'
const invalid_isbn13_978 = '9780753555100'
const invalid_isbn13_979 = '9791145310021'
const invalid_isbn10 = '0306406172'

const i_s_b_n13 = '978-0-75355520-0'
const i_s_b_n10 = '0-75355520-0'


/** test validate **/

test('Validate valid 978 isbn13', t => {
  t.true(validate(valid_isbn13_978))
})

test('Validate valid 978 isbn13', t => {
  t.false(validate(invalid_isbn13_978))
})

test('Validate valid 979 isbn13', t => {
  t.true(validate(valid_isbn13_979))
})

test('Validate invalid 979 isbn13', t => {
  t.false(validate(invalid_isbn13_979))
})

test('Validate valid isbn10', t => {
  t.true(validate(valid_isbn10))
})

test('Validate valid isbn10 ends with X', t => {
  t.true(validate(valid_isbn10_X))
})

test('Validate invalid isbn10', t => {
  t.false(validate(invalid_isbn10))
})

test('Validate invalid isbn', t => {
  t.false(validate(invalid_isbn))
})

/** test hyphenate **/

test('hyphenate valid 978 isbn13', t => {
  t.is(hyphenate(valid_isbn13_978), hyphenated_valid_isbn13_978)
})

test('hyphenate valid 979 isbn13', t => {
  t.is(hyphenate(valid_isbn13_979), hyphenated_valid_isbn13_979)
})

test('hyphenate valid isbn10', t => {
  t.is(hyphenate(valid_isbn10), hyphenated_valid_isbn10)
})

test('hyphenate valid isbn10 ends with X', t => {
  t.is(hyphenate(valid_isbn10_X), hyphenated_valid_isbn10_X)
})

test('hyphenate invalid isbn', t => {
  t.is(hyphenate(invalid_isbn), '9770753555200')
})

/** test dehyphenate **/

test('Dehyphenate isbn13', t => {
  t.is(dehyphenate(i_s_b_n13), '9780753555200')
})

test('Dehyphenate isbn10', t => {
  t.is(dehyphenate(i_s_b_n10), '0753555200')
})

test('Dehyphenate non-hyphenateted isbn', t => {
  t.is(dehyphenate('9780753555200'), '9780753555200')
})
