/*
Write a function that takes a date string in the format "YYYY-MM-DD" and returns the corresponding zodiac sign.
Zodiac Signs and Date Ranges:
- Aries: March 21 - April 19
- Taurus: April 20 - May 20
- Gemini: May 21 - June 20
- Cancer: June 21 - July 22
- Leo: July 23 - August 22
- Virgo: August 23 - September 22
- Libra: September 23 - October 22
- Scorpio: October 23 - November 21
- Sagittarius: November 22 - December 21
- Capricorn: December 22 - January 19
- Aquarius: January 20 - February 18
- Pisces: February 19 - March 20
*/

function getSign(dateStr) {
  const parts = dateStr.split("-");
  const month = Number(parts[1]);
  const day = Number(parts[2]);
  if (month === 3 && day >= 21 || month === 4 && day <= 19 ) {
    return "Aries";
  } else if (month === 4 && day >= 20 || month === 5 && day <= 20 ) {
    return "Taurus";
  } else if (month === 5 && day >= 21 || month === 6 && day <= 20 ) {
    return "Gemini";
  } else if (month === 6 && day >= 21 || month === 7 && day <= 22 ) {
    return "Cancer";
  } else if (month === 7 && day >= 23 || month === 8 && day <= 22 ) {
    return "Leo";
  } else if (month === 8 && day >= 23 || month === 9 && day <= 22 ) {
    return "Virgo";
  } else if (month === 9 && day >= 23 || month === 10 && day <= 22 ) {
    return "Libra";
  } else if (month === 10 && day >= 23 || month === 11 && day <= 21 ) {
    return "Scorpio";
  } else if (month === 11 && day >= 22 || month === 12 && day <= 21 ) {
    return "Sagittarius";
  } else if (month === 12 && day >= 22 || month === 1 && day <= 19 ) {
    return "Capricorn";
  } else if (month === 1 && day >= 20 || month === 2 && day <= 18 ) {
    return "Aquarius";
  } else {
    return "Pisces";
  }
}

// Test cases
console.log((getSign("2026-05-15")));
console.log((getSign("2026-01-31")));
console.log((getSign("4000-03-21")));
console.log((getSign("2046-07-04")));
console.log((getSign("2026-10-30")));