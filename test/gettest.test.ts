const gettest = require('./gettest');

test('adds 1 + 2 to equal 3', async () => {
  expect(gettest("newMessage")).toBe('newMessage');
});