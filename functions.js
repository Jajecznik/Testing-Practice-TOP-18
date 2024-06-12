function capitalize(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

const calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    divide(a, b) {
        if (b === 0) throw new Error("Cannot divide by 0");
        return a / b;
    },

    multiply(a, b) {
        return a * b;
    }
}

function caesarCipher(str, shiftFactor) {
    shiftFactor %= 26;
    let cipher = "";

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        let shift = shiftFactor;

        if (code >= 65 && code <= 90) {
            if (code + shift <= 90) {
                cipher += String.fromCharCode(code + shift);
            } else {
                let dif = 90 - code;
                shift -= dif;
                cipher += String.fromCharCode(64 + shift);
            }

        } else if (code >= 97 && code <= 122) {
            if (code + shift <= 122) {
                cipher += String.fromCharCode(code + shift);
            } else {
                let dif = 122 - code;
                shift -= dif;
                cipher += String.fromCharCode(96 + shift);
            }
        } else {
            cipher += str[i];
        }
    }

    return cipher;
}

function analyzeArray(array) {
    let sum = 0;
    let min = array[0];
    let max = array[0];
    const length = array.length;

    array.forEach(element => {
        if (element < min) min = element;
        if (element > max) max = element;
        sum += element;
    });

    const obj = {
        "average": sum / length,
        "min": min,
        "max": max,
        "length": length
    }

    return obj;
}

module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
