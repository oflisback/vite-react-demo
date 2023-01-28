import { expect, test } from 'vitest'
import { addOne } from '../src/math.js'

test('addOne', () => {
  expect(addOne(3)).toBe(4)
})
