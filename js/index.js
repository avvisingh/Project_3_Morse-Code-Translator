import englishCharSet from "./data/englishCharSet.js";
import morseCharSet from "./data/morseCharSet.js";

/*englishToMorse takes in 3 parameters:
1. the string to translate
2. the pre-defined set of accepted English characters
3. the pre-defined set of accepted Morse characters */
let englishToMorse = (str, engArr, mcArr) => {
    let charArr = str.toLowerCase().split("");
    let returnArr = charArr
        .filter((char) => engArr.includes(char))
        .map((char) => mcArr[engArr.indexOf(char)]);
    return returnArr.join(" ");
};

let morseToEnglish = (str, mcArr, engArr) => {
    let charArr = str.toLowerCase().split(" ");
    let returnArr = charArr
        .filter((char) => mcArr.includes(char))
        .map((char) => engArr[mcArr.indexOf(char)]);
    return returnArr.join("");
};

export { englishToMorse, morseToEnglish };
