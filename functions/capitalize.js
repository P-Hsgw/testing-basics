const capitalize = (string) => {
    const capitalized = string[0].toUpperCase()
    let result = capitalized
    for (let i=1; i<string.length; i++) {
            result += string[i]
        }
    return result
}

export default capitalize