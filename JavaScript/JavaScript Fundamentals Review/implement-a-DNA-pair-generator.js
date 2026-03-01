/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input "ATCGA", return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
*/

function pairElement(str) {
    let result = [];
    const pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    for (let i = 0; i < str.length; i++) {
        result.push([str[i], pairs[str[i]]])
    }
    return result;
}

// Test cases
console.log(pairElement("ATCGA")); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement("TTGAG")); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(pairElement("CTCTA")); // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]