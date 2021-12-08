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
});
