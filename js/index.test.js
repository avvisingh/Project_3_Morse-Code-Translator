//Test for enlgish->morse
//function should return correct alphabets and numbers i.e (englishToMorse('a') should return '.-')
//function should return a space for a space
//function should return error message if character entered is not in charSet
import englishCharSet from "./data/englishCharSet";
import morseCharSet from "./data/morseCharSet";
import { englishToMorse } from ".";

describe("Tests for englishToMorse()", () => {
    it("Should correctly convert sentences containing only lowercase letters", () => {
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
    it("Should correctly convert sentences containing numbers", () => {
        expect(
            englishToMorse("my number is 1234x", englishCharSet, morseCharSet)
        ).toBe(
            "-- -.-- / -. ..- -- -... . .-. / .. ... / .---- ..--- ...-- ....- -..-"
        );
    });
});
