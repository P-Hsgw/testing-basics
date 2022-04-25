import cipher from "../functions/cipher"

test(`"HelloWorld" should become "ifmmpxpsme"`, () => {
    expect(cipher("HelloWorld", 1)).toBe("ifmmpxpsme")
})

test(`"HelloWorld" should become "jgnnqyqtnf"`, () => {
    expect(cipher("HelloWorld", 2)).toBe("jgnnqyqtnf")
})

test(`"Hello World" should become "ifmmp xpsme"`, () => {
    expect(cipher("Hello World", 1)).toBe("ifmmp xpsme")
})