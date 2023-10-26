function reverseWords(sentence) {
    let reversedSentence = '';
    let currentWord = '';

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ' ') {
            currentWord = sentence[i] + currentWord;
        } else {
            reversedSentence += currentWord + ' ';
            currentWord = '';
        }
    }

    reversedSentence += currentWord; // Add the last word

    return reversedSentence;
}

// Example usage
let inputSentence = "This is a sunny day";
let reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence); // Output: "sihT si a ynnus yad"
