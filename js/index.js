import englishCharSet from "./data/englishCharSet.js";
import morseCharSet from "./data/morseCharSet.js";

/*englishToMorse takes in 3 parameters:
1. the string to translate
2. the pre-defined set of accepted English characters
3. the pre-defined set of accepted Morse characters */
let englishToMorse = (str, engArr, mcArr) => {
    let charArr = str.toLowerCase().split("");
    let returnArr = charArr
        .filter((char) => englishCharSet.includes(char))
        .map((char) => {
            return mcArr[engArr.indexOf(char)];
        });
    return returnArr.join(" ");
};

export { englishToMorse };
