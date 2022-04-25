import reverse from "../functions/reverse"

test (`"Abcdefghi" should become "ihgfedcbA"`, () => {
    expect(reverse("Abcdefghi")).toBe(`ihgfedcbA`)
});