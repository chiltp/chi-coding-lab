function titleCase(str) {
    let words = str.toLowerCase().split(" ");
    let result = [];
    for (let word of words) {
        // Capitalize the first letter and concatenate with the rest of the word
        let capitalizedWord = word[0].toUpperCase() + word.slice(1);
        result.push(capitalizedWord);
    }
    // Join the array of capitalized words back into a single strin
    return result.join(" ");
}

// Test cases
console.log(titleCase("I'm a little tea pot")); // "I'm A Little Tea Pot"
console.log(titleCase("sHoRt AnD sToUt")); // "Short And Stout"
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // "Here Is My Handle Here Is My Spout"