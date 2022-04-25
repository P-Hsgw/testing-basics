import capitalize from "../functions/capitalize"

test('"test" should become "Test"', () => {
  expect(capitalize('test')).toBe('Test');
});