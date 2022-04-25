import { add, substract, divide, multiply } from "../functions/calculate"

test("10+10 should become 20", () => {
    expect(add(10, 10)).toBe(20)
})

test("10-10 should become 0", () => {
    expect(substract(10, 10)).toBe(0)
})

test("10/10 should become 1", () => {
    expect(divide(10, 10)).toBe(1)
})

test("10*10 should become 100", () => {
    expect(multiply(10, 10)).toBe(100)
})