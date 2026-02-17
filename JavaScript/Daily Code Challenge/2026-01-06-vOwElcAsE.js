/*
Write a function that takes a string as an argument and converts all the vowels in the string to uppercase and all the consonants to lowercase.
*/

function vowelCase(str) {
    const vowels = "aeiou";
    let result = "";
    for (let char of str) {
        // Check if the character is a vowel (case-insensitive)
        if (vowels.includes(char.toLowerCase())) {
            result += char.toUpperCase();
        // Check if the character is a consonant (case-insensitive)
        } else if (char.toLowerCase() !== char.toUpperCase()) {
            result += char.toLowerCase();
        // If it's neither a vowel nor a consonant (e.g., space, punctuation), keep it as is
        } else {
            result += char;
        }
    }
    return result;
}

// Test cases
console.log(vowelCase("vowelcase")); // "vOwElcAsE"
console.log(vowelCase("coding is fun")); // "cOdIng Is fUn"
console.log(vowelCase("HELLO, world!")); // "hEllO, wOrld!"
console.log(vowelCase("git cherry-pick")); // "gIt chErry-pIck"