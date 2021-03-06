

const cipher = (message, nParam) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890"
    let shiftedAlphabet = ""
    let result = "";
    message = message.toLowerCase();

        for (let i = 0; i < alphabet.length; i++){
            let offset = (i + nParam) % alphabet.length;
            shiftedAlphabet += alphabet[offset];
        }

        for (let i = 0; i < message.length; i++){
            let index = numbers.indexOf(message[i])
            if (message[i] == " ") {
                result += " "
            } else if (message[i] == numbers[index]) {
                result += message[i]
            }else {
                let index = alphabet.indexOf(message[i]);
                result += shiftedAlphabet[index];
            }
        }
    
    return result
}

export default cipher