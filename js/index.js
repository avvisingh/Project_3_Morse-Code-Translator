import englishCharSet from "./data/englishCharSet.js";
import morseCharSet from "./data/morseCharSet.js";

let englishTextArea = document.getElementById("english-text");
let morseTextArea = document.getElementById("morse-text");

/*englishToMorse takes in 3 parameters:
1. the string to translate
2. the pre-defined set of accepted English characters
3. the pre-defined set of accepted Morse characters */
let englishToMorse = (str, engArr, mcArr) => {
    let charArr = str.toLowerCase().split("");
    let returnArr = charArr
        //filter will remove any unsupported chars
        .filter((char) => engArr.includes(char))
        .map((char) => mcArr[engArr.indexOf(char)]);
    return returnArr.join(" ");
};

/*morseToEnglish takes in 3 parameters:
1. the string to translate
2. the pre-defined set of accepted Morse characters
3. the pre-defined set of accepted English characters */
let morseToEnglish = (str, mcArr, engArr) => {
    let charArr = str.toLowerCase().split(" ");
    let returnArr = charArr
        //filter will remove any unsupported chars
        .filter((char) => mcArr.includes(char))
        .map((char) => engArr[mcArr.indexOf(char)]);
    return returnArr.join("");
};

englishTextArea.addEventListener("keyup", () => {
    morseTextArea.value = englishToMorse(
        englishTextArea.value,
        englishCharSet,
        morseCharSet
    );
});

morseTextArea.addEventListener("keyup", () => {
    englishTextArea.value = morseToEnglish(
        morseTextArea.value,
        morseCharSet,
        englishCharSet
    );
});

export { englishToMorse, morseToEnglish };
