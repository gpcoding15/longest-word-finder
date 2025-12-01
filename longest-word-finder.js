const findLongestWordLength = phrase => {
    const splittedPhrase = phrase.split(" ");
    const splittedSortedPhrase = splittedPhrase.sort((a,b) => a.length - b.length)
    const longestWord = splittedSortedPhrase[splittedSortedPhrase.length - 1]
    return longestWord.length
}

module.exports = { findLongestWordLength}
