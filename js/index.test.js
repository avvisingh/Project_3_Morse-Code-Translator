//Test for enlgish->morse
//function should return correct alphabets and numbers i.e (englishToMorse('a') should return '.-')
//function should return a space for a space
//function should return error message if character entered is not in charSet
import englishCharSet from "./data/englishCharSet";
import morseCharSet from "./data/morseCharSet";
import { englishToMorse, morseToEnglish } from ".";

xdescribe("Tests for englishToMorse()", () => {
    it("Should correctly convert single words", () => {
        expect(englishToMorse("holiday", englishCharSet, morseCharSet)).toBe(
            ".... --- .-.. .. -.. .- -.--"
        );
    });
    it("Should correctly convert sentences containing spaces and lowercase letters only", () => {
        expect(
            englishToMorse("hello how are you", englishCharSet, morseCharSet)
        ).toBe(".... . .-.. .-.. --- / .... --- .-- / .- .-. . / -.-- --- ..-");
        expect(
            englishToMorse("this is a test", englishCharSet, morseCharSet)
        ).toBe("- .... .. ... / .. ... / .- / - . ... -");
    });
    it("Should provide the same output with uppercase letters", () => {
        expect(
            englishToMorse("HELLO HOW ARE YOU", englishCharSet, morseCharSet)
        ).toBe(".... . .-.. .-.. --- / .... --- .-- / .- .-. . / -.-- --- ..-");
        expect(
            englishToMorse("ThIs Is A tEsT", englishCharSet, morseCharSet)
        ).toBe("- .... .. ... / .. ... / .- / - . ... -");
    });
    it("Should correctly convert sentences containing permitted puncutation", () => {
        expect(
            englishToMorse("Hello, how are you?", englishCharSet, morseCharSet)
        ).toBe(
            ".... . .-.. .-.. --- --..-- / .... --- .-- / .- .-. . / -.-- --- ..- ..--.."
        );
    });
    it("Should correctly convert sentences containing numbers", () => {
        expect(
            englishToMorse("my number is 1234x", englishCharSet, morseCharSet)
        ).toBe(
            "-- -.-- / -. ..- -- -... . .-. / .. ... / .---- ..--- ...-- ....- -..-"
        );
    });
    it("Should ignore special characters which are not described in the charset", () => {
        expect(
            englishToMorse(
                "hel*&lo ho$w are you%",
                englishCharSet,
                morseCharSet
            )
        ).toBe(".... . .-.. .-.. --- / .... --- .-- / .- .-. . / -.-- --- ..-");
    });
});

describe("Tests for morseToEnglish()", () => {
    it("Should correctly convert single words", () => {
        expect(
            morseToEnglish(
                ".... --- .-.. .. -.. .- -.--",
                morseCharSet,
                englishCharSet
            )
        ).toBe("holiday");
    });
    it("Should correctly convert sentences containing spaces", () => {
        expect(
            morseToEnglish(
                ".... . .-.. .-.. --- / .... --- .-- / .- .-. . / -.-- --- ..-",
                morseCharSet,
                englishCharSet
            )
        ).toBe("hello how are you");
        expect(
            morseToEnglish(
                "- .... .. ... / .. ... / .- / - . ... -",
                morseCharSet,
                englishCharSet
            )
        ).toBe("this is a test");
    });
    it("Should correctly convert sentences containing permitted punctuation", () => {
        expect(
            morseToEnglish(
                ".... . .-.. .-.. --- --..-- / .... --- .-- / .- .-. . / -.-- --- ..- ..--..",
                morseCharSet,
                englishCharSet
            )
        ).toBe("hello, how are you?");
    });
    it("Should correctly convert sentences containing numbers", () => {
        expect(
            morseToEnglish(
                "-- -.-- / -. ..- -- -... . .-. / .. ... / .---- ..--- ...-- ....- -..-",
                morseCharSet,
                englishCharSet
            )
        ).toBe("my number is 1234x");
    });
});
