function charToValue(char) {
    if (char >= 'A' && char <= 'Z') {
        return char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    } else if (char >= 'a' && char <= 'z') {
        return char.charCodeAt(0) - 'a'.charCodeAt(0) + 27;
    } else {
        throw new Error("Unsupported character!");
    }
}

function valueToChar(value) {
    if (value >= 1 && value <= 26) {
        return String.fromCharCode(value + 'A'.charCodeAt(0) - 1);
    } else if (value >= 27 && value <= 52) {
        return String.fromCharCode(value + 'a'.charCodeAt(0) - 27);
    } else {
        throw new Error("Unsupported value!");
    }
}

function encodeString(str) {
    const base = 52;
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        result += charToValue(str[i]) * Math.pow(base, str.length - i - 1);
    }
    return result;
}

function decodeInteger(value) {
    const base = 52;
    const result = [];
    while (value > 0) {
        result.unshift(value % base);
        value = Math.floor(value / base);
    }
    return result.map(valueToChar).join('');
}
