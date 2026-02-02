/*
Create a simple quiz game where the computer randomly selects a question from a predefined set of questions. Each question should have multiple-choice answers. The computer will also randomly select one of the answer choices as its answer. Finally, determine if the computer's answer is correct or not.
Steps to implement:
1. Define an array of question objects, each containing a question, multiple choices, and the correct answer.
2. Create a function to randomly select a question from the array.
3. Create a function to randomly select an answer choice for the selected question.
4. Create a function to compare the computer's answer with the correct answer and return whether it is correct or not.
*/

//Data setup
const questions = [
  {
    category: "JavaScript",
    question: "Which keyword is used to declare a variable that cannot be reassigned?",
    choices: ["var", "let", "const"],
    answer: "const"
  },
  {
    category: "HTML",
    question: "Which HTML tag is used to create a hyperlink?",
    choices: ["<link>", "<a>", "<href>"],
    answer: "<a>"
  },
  {
    category: "CSS",
    question: "Which property is used to change the text color?",
    choices: ["font-style", "text-color", "color"],
    answer: "color"
  },
  {
    category: "General Programming",
    question: "What does API stand for?",
    choices: ["Application Programming Interface", "Advanced Program Instruction", "Applied Programming Internet"],
    answer: "Application Programming Interface"
  },
  {
    category: "Web Development",
    question: "Which method is used to add an item to the end of an array in JavaScript?",
    choices: ["push()", "pop()", "shift()"],
    answer: "push()"
  }
];

// Selects a random question from the array
function getRandomQuestion(questions) {
  const randomQuestionIndex = Math.floor(Math.random() * questions.length);
  return questions[randomQuestionIndex];
}
// Selects a random question from the array
function getRandomComputerChoice(choices) {
  const randomChoiceIndex = Math.floor(Math.random() * choices.length);
  return choices[randomChoiceIndex];
}
// Compares the computer's answer with the correct answer
function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!"
  }
  return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
}

// Game simulation
const selectedQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(selectedQuestion.choices);
const result = getResults(selectedQuestion, computerChoice);

console.log(`Category: ${selectedQuestion.category}`);
console.log(`Question: ${selectedQuestion.question}`);
console.log(`Choices: ${selectedQuestion.choices.join(", ")}`);
console.log(`Computer's choice: ${computerChoice}`);
console.log(result);

// Test cases
// (Note: Since the question and computer choice are random, the output will vary each time the code is run.)
// Run the code multiple times to see different questions and computer choices.
