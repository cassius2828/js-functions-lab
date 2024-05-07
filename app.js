///////////////////////////
// exercise 1
///////////////////////////
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) return x;
  else return y;
};
console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));
///////////////////////////
// exercise 2
///////////////////////////
const isAdult = (age) => {
  if (age > 17) return "Adult";
};
console.log("Exercise 2 Result:", isAdult(21));
///////////////////////////
// exercise 3
///////////////////////////
let vowels = ["a", "e", "i", "o", "u"];

const isCharAVowel = (letter) => {
  let targetLetter;
  vowels.map((item) => {
    if (item === letter) {
      targetLetter = letter;
    }
  });
  if (!targetLetter) return false;
  else return true;
};

const isVowel = isCharAVowel("a");
const isNotVowel = isCharAVowel("j");
console.log("Exercise 3 Result:", isCharAVowel("u"));

console.log(isVowel, " This is a vowel");
console.log(isNotVowel, " This is not a vowel");

///////////////////////////
// exercise 4
///////////////////////////
const generateEmail = (name, email) => {
  return `${name}@${email}`;
};
console.log("Exercise 4 Result:", generateEmail("johnsmith", "example.com"));
///////////////////////////
// exercise 5
///////////////////////////
const greetUser = (name, timeOfDay) => {
  if (timeOfDay === "morning") {
    return `Good morning ${name}!`;
  } else if (timeOfDay === "afternoon") {
    return `Good afternoon ${name}!`;
  } else if (timeOfDay === "evening") {
    return `Good evening ${name}!`;
  }
};
console.log("Exercise 5 Result:", greetUser("Sam", "morning"));
///////////////////////////
// exercise 6
///////////////////////////
const reverseStr = (str) => {
  let newStr = str.split("").reverse().join("");
  return newStr;
};
console.log("Exercise 6 Result:", reverseStr("rockstar"));
///////////////////////////
// exercise 7
///////////////////////////
const checkPalindrome = (str) => {
  let copyStr = reverseStr(str);
  if (copyStr === str) {
    return `This is a palindrome, because ${str} === ${copyStr}`;
  } else return `This is NOT a palindrome, because ${str} !== ${copyStr}`;
};
console.log("Exercise 7 Result:", checkPalindrome("radar"));
console.log("Exercise 7 Result:", checkPalindrome("LeBron"));

///////////////////////////
// exercise 8
///////////////////////////
const maxOfThree = (num1, num2, num3) => {
  let largestNum = num1;
  if (largestNum < num2) {
    largestNum = num2;
  }
  if (largestNum < num3) {
    largestNum = num3;
  }
  return largestNum;
};

console.log("Exercise 8 Result:", maxOfThree(5, 10, 8));
///////////////////////////
// exercise 9
///////////////////////////
const calculateTip = (bill, tipPercent) => {
  let tipAmount = bill * (tipPercent / 100);
  return tipAmount + bill;
};

console.log("Exercise 9 Result:", calculateTip(50, 20));
///////////////////////////ƒ
// exercise 10
///////////////////////////
const convertTemperature = (temp, scale) => {
  if ((scale = "C")) {
    return (temp * 9) / 5 + 32 + "Farenheit";
  } else if ((scale = "F")) {
    return ((temp - temp) * 5) / 9 + "Celsius";
  } else return "Please enter the correct scale, either C or F";
};
console.log("Exercise 10 Result:", convertTemperature(32, "C"));
///////////////////////////
// exercise 11
///////////////////////////
const basicCalculator = (num1, num2, operation) => {
  switch (operation) {
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    default:
      return "Please type in the text form of a proper operation";
  }
};
console.log("Exercise 11 Result:", basicCalculator(8, 5, "add"));
console.log("Exercise 11 Result:", basicCalculator(8, 5, "subtract"));
console.log("Exercise 11 Result:", basicCalculator(8, 5, "multiply"));
console.log("Exercise 11 Result:", basicCalculator(8, 5, "divide"));
console.log("Exercise 11 Result:", basicCalculator(8, 5, "tootsie slide"));

///////////////////////////
// exercise 12
///////////////////////////
const calculateGrade = (score) => {
  if (score > 89 && score < 100) {
    return "A";
  } else if (score > 79 && score < 90) {
    return "B";
  } else if (score > 69 && score < 80) {
    return "C";
  } else if (score > 59 && score < 70) {
    return "D";
  } else if (score < 60) {
    return "F";
  } else return "Is that really your score?";
};
console.log("Exercise 12 Result:", calculateGrade(85));
// ! come back to 12
///////////////////////////
// exercise 13
///////////////////////////

const createUsername = (fName, lName) => {
  let start = fName.slice(0, 3);
  let end = fName.slice(0, 3);
  let count = fName.length + lName.length;
  let username = start + end + count;
  return username;
};
console.log("Exercise 13 Result:", createUsername("Samantha", "Green"));
///////////////////////////
// exercise 14
///////////////////////////
const numArgs = (...args) => {
  return args.length;
};
console.log("Exercise 14 Result:", numArgs(1, 2, 3, 4));

const bg = document.querySelector("body");
bg.style.backgroundColor = "#2b2b2b";
bg.style.color = "#fff";
