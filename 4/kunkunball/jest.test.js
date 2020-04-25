test('test common matcher', () => {
  expect(2 + 2).toBe(4)
  expect(2 + 2).not.toBe(5)

})

test('test tobe true or false', () => {
  expect(2).toBeGreaterThan(1)
  expect(2).toBeLessThan(3)

})
test('test obj', () => {
  expect({ name: 'guopeng' }).toEqual({ name: 'guopeng' })

})