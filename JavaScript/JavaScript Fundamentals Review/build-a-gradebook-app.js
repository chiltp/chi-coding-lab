function getAverage (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const average = sum / arr.length;
    return average;
}

function getGrade (score) {
    if (score == 100) return "A+";
    else if (score >= 90)  return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

function hasPassingGrade (score) {
    if (getGrade(score) == "F") return false;
    else return true;
}

//optional: A more concise implementation of hasPassingGrade using a single return statement:
function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

function studentMsg (arr, score) {
    const classAverage = getAverage(arr);
    const studentGrade = getGrade(score);
    if (hasPassingGrade(score)) {
        return `Class average: ${classAverage}. Your grade: ${studentGrade}. You passed the course.`;
    } else {
        return `Class average: ${classAverage}. Your grade: ${studentGrade}. You failed the course.`;
    }
}

// Optional: A more concise implementation of studentMsg using a single return statement:
function studentMsg(arr, score) {
    const classAverage = getAverage(arr);
    const studentGrade = getGrade(score);
    const passFailMsg = hasPassingGrade(score) ? "You passed the course." : "You failed the course.";
    return `Class average: ${classAverage}. Your grade: ${studentGrade}. ${passFailMsg}`;
}

// Test cases
console.log(studentMsg([90, 80, 70], 85)); // Class average: 80. Your grade: A. You passed the course.
console.log(studentMsg([60, 70, 80], 55)); // Class average: 70. Your grade: F. You failed the course.
console.log(studentMsg([100, 90, 80], 100)); // Class average: 90. Your grade: A+. You passed the course.
console.log(studentMsg([50, 60, 70], 65)); // Class average: 60. Your grade: D. You passed the course.
console.log(studentMsg([85, 90, 95], 75)); // Class average: 90. Your grade: C. You passed the course.