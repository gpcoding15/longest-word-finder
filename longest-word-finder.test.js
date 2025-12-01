const  { findLongestWordLength } = require('./longest-word-finder');

describe("longest-word-finder", () => {
    test("should return 6 when the longest word of the phrase is 'jumped'", () => {
        const phrase = "The quick brown fox jumped over the lazy dog";

        const result = findLongestWordLength(phrase);

        expect(result).toBe(6);
    });

    test("should return 0 when the received phrase is an empty string", () => {
        const phrase = "";

        const result = findLongestWordLength(phrase);

        expect(result).toBe(0);
    });
});