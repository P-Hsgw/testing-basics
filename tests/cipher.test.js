import cipher from "../functions/cipher"

test(`"Hello World" should become "ifmmp xpsme"`, () => {
    expect(cipher("Hello World")).toBe("ifmmp xpsme")
})