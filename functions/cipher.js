

const cipher = (message, nParam) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let shiftedAlphabet = ""
    let result = "";

        for (let i = 0; i < alphabet.length; i++){
            let offset = (i + nParam) % alphabet.length;
            shiftedAlphabet += alphabet[offset];
        }
    

        message = message.toLowerCase();
        for (let i = 0; i < message.length; i++){
            let index = alphabet.indexOf(message[i]);
            result += shiftedAlphabet[index];
        }
    
    return result
}

export default cipher