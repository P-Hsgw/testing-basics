import capitalize from "../functions/capitalize"

test(`"test" should become "Test"`, () => {
  expect(capitalize('test')).toBe('Test')
});

test(`"0123234dsad2312" should become "0123234dsad2312"`, () => {
  expect(capitalize(`0123234dsad2312`)).toBe(`0123234dsad2312`)
});

test(`"TeStinGs" should become "TeStinGs"`, () => {
  expect(capitalize(`TeStinGs`)).toBe(`TeStinGs`)
})