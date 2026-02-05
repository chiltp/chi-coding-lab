/*
Given a string, return it as-is if it's 20 characters or shorter. If it's longer than 20 characters, truncate it to the first 17 characters and append "..." to the end of it (so it's 20 characters total) and return the result.
*/

function truncateText(text) {
  if (text.length <= 20) {
    return text;
  }
  const truncatedText = text.slice(0, 17);
  return truncatedText + "...";
}

// Test cases
console.log(truncateText("This string should get truncated.")); // "This string should..."
console.log(truncateText("Hello, world!")); // "Hello, world!"
console.log(truncateText("Exactly twenty chars")); // "Exactly twenty chars"
console.log(truncateText(".....................")); // "....................."