/*
Given a string of coffee beans, determine the roast level of the coffee. The roast level is determined by the average "roast value" of the beans, where:
- A light roast bean (represented by "'") has a roast value of 1.
- A medium roast bean (represented by "-") has a roast value of 2.
- A dark roast bean (represented by ".") has a roast value of 3.

The average roast value is calculated by summing the roast values of all beans and dividing by the total number of beans. The roast level is then determined as follows:
- If the average roast value is less than 1.75, the roast level is "Light".
- If the average roast value is between 1.75 and 2.5 (inclusive), the roast level is "Medium".
- If the average roast value is greater than 2.5, the roast level is "Dark".
*/

function detectRoast(beans) {
    let total = 0;
    for (let bean of beans) {
        if (bean === "'") {
        total += 1;
        } else if (bean === "-") {
        total += 2;
        } else if (bean === ".") {
        total += 3;
        }
    }

    const average = total / beans.length;
    if (average < 1.75) return "Light";
    else if (average >= 1.75 && average <= 2.5) return "Medium";
    else return "Dark";
}

// Test cases
console.log(detectRoast("''-''''''-'-''--''''")); // Output: "Light"
console.log(detectRoast(".'-''-''..'''.-.-''-")); // Output: "Medium"
console.log(detectRoast("--.''--'-''.--..-.--")); // Output: "Dark"
console.log(detectRoast("-...'-......-..-...-")); // Output: "Dark"
console.log(detectRoast(".--.-..-......----.'")); // Output: "Medium"
console.log(detectRoast("..-..-..-..-....-.-.")); // Output: "Dark"
console.log(detectRoast("-'-''''''..-'.''-'.'")); // Output: "Light"