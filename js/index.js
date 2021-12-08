import englishCharSet from "./data/englishCharSet.js";
import morseCharSet from "./data/morseCharSet.js";

let englishToMorse = (str, engArr, mcArr) => {
    let charArr = str.toLowerCase().split("");
    let returnArr = charArr.map((char) => {
        if (char === " ") {
            return " / ";
        }
        return mcArr[engArr.indexOf(char)];
    });
    return returnArr.join(" ");
};

console.log(
    englishToMorse("Hello, my name is Avvi", englishCharSet, morseCharSet)
);
