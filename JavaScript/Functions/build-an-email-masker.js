/*
Write a function maskEmail(email) that hides the username part of an email address with asterisks, keeping only the first and last characters before the @.
Return the masked email and log the result to the console.
*/

function maskEmail(email) {
  // Find the index of "@" to separate username and domain
  const atIndex = email.indexOf("@");
  // Extract username and domain
  const userName = email.slice(0, atIndex);
  // Extract domain
  const domainName = email.slice(atIndex);
  // Mask the username except for the first and last characters
  const firstChar = userName[0];
  const lastChar = userName[userName.length - 1];
  const maskedChars = "*".repeat(userName.length - 2);
  return firstChar + maskedChars + lastChar + domainName;
}

// Test cases
const email = "apple.pie@example.com";
console.log(maskEmail(email)); // a****e@example.com
console.log(maskEmail("freecodecamp@example.com")); // f*********p@example.com
console.log(maskEmail("user@domain.org")); // u***r@domain.org
console.log(maskEmail("info@test.dev")); // i**o@test.dev