/*
1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

function displayCurrentTimeAndDate() {
  // d
  const date = new Date();
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const hour = date.getHours();
  console.log(`Today is: ${weekDay[date.getDay()]}`);
  console.log(
    `Current time is : ${hour} ${
      hour >= 12 && hour <= 24 ? "PM" : "AM"
    } : ${date.getMinutes()} : ${date.getSeconds()}`
  );
}

// displayCurrentTimeAndDate()

/*
3. Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

function getCurrentDate() {
  const date = new Date();
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
}

// console.log(getCurrentDate())

/*
4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
*/

function areaOfTriangle(s1, s2, s3) {
  const s = (s1 + s2 + s3) / 2;

  return Math.sqrt(s * ((s - s1) * (s - s2) * (s - s3)));
}
// console.log(areaOfTriangle(5,6,7))

/*
5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. 
This is done by periodically removing one letter from the string end and attaching it to the front.  
*/

function rotateString(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid String");
  }
  if (typeof str === "string" && str.length > 0) {
    setInterval(() => {
      const rotateString =
        str.charAt(str.length - 1) + str.substring(0, str.length - 1);
      return rotateString;
    }, 200);
  } else {
    return str;
  }
}

// rotateString('w3resource')

/*
6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
*/

function isLeapYear(year) {
  if (typeof year !== "number" || !Number.isInteger(year)) {
    throw new Error("Input is not valid number");
  }

  if (year < 0 || year.toString().length !== 4) {
    throw new Error("Input is not valid year");
  }
  const century = year % 10 === 0 && year % 400 === 0;
  const divisibleByFour = year % 4 === 0;

  if (century) {
    return true;
  }
  if (!century && divisibleByFour) {
    return true;
  }
  return (year % 4 === 0) & (year % 100 !== 0) || year % 400 === 0;
}

// console.log(isLeapYear(2023));

/*
7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
*/

function isSundayOnNewYear(yearOne, yearTwo) {
  if (
    (typeof yearOne !== "number" && typeof yearTwo !== "number") ||
    !Number.isInteger(yearOne) ||
    !Number.isInteger(yearTwo)
  ) {
    throw new Error("Invalid input number");
  }

  if (
    yearOne < 0 ||
    yearTwo < 0 ||
    yearOne.toString().length !== 4 ||
    yearTwo.toString().length !== 4
  ) {
    throw new Error("Invalid date");
  }

  for (let year = yearOne; year <= yearTwo; year++) {
    const date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
      return true;
    }
  }
  return false;
}

// console.log(isSundayOnNewYear(2014,2050))

/*
8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. 
The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
*/

function guessNumber(num) {
  if (
    typeof num !== "number" ||
    num < 1 ||
    num > 10 ||
    !Number.isInteger(num)
  ) {
    throw new Error(
      "Input is not valid number or not in range between 1 to 10"
    );
  }

  const res = Number(prompt("Guess The number between range of 1 to 10", 1));

  if (
    typeof res !== "number" ||
    num < 1 ||
    num > 10 ||
    !Number.isInteger(res)
  ) {
    throw new Error(
      "Prompt Input is not valid number or not in range between 1 to 10"
    );
  }

  return num === Number(res) ? "Good Work" : "Not matched";
}

// guessNumber(Math.floor(Math.random() * 10 + 1))

/*
9. Write a JavaScript program to calculate the days left before Christmas.
*/

function daysBeforeChristmas() {
  const date = new Date();
  const christmasDate = new Date(date.getFullYear(), 11, 25);
  return Math.round(
    (christmasDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );
}

// console.log(daysBeforeChristmas());

/*
12. Write a JavaScript program to get the website URL (loading page). 
*/

function getWebsiteUrl(){
    return window.location.href
}


/*
13. Write a JavaScript exercise to create a variable using a user-defined name.
*/

function creatVariable(){
    const varName = "abcd"
    const n = 120

    this[varName] = n;

    console.log(this[varName],abcd)
}

// creatVariable()


/*
14. Write a JavaScript exercise to get the filename extension.  
*/

function getFileNameExtension(file){
    // Check if input is valid fileName
    if(typeof file !== "string" || !file.includes(".") || (file.split("").filter((val) => val === ".").length > 1)){
        throw new Error("Input valid filename ")
    }
    return file.split(".").pop()
}

/*
15. Write a JavaScript program to get the difference between a given number and 13, 
if the number is broader than 13 return double the absolute difference.  
*/

function difference(num){

  if(num <= 13){
    return num - 13
  }

  return (num - 13) * 2

}

/*
16. Write a JavaScript program to compute the sum of the two given integers. 
If the two values are the same, then return triple their sum.
*/

function sumTwoInteger(n1,n2){
  if(!Number.isInteger(n1) || !Number.isInteger(n2)){
    throw new Error("Invalid input integers")
  }
  const sum = n1 + n2
  if(n1 === n2){
    return sum * 3
  }

  return sum
}

/*
17. Write a JavaScript program to compute the absolute difference between a specified number and 19. 
Returns triple the absolute difference if the specified number is greater than 19. 
*/

function differenceTripple(num){

  if(typeof num !== "number"){
    throw new Error("Input is not valid number")
  }

  if(num > 19){
    return Math.abs(num - 19)
  }

  return num - 19
}

/*
18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50. 

*/

function isSum50(n1,n2){
  if(typeof n1 !== "number" || typeof n2 !== "number"){
    throw new Error("Input is not valid number")
  }

  if(n1 === 50 || n2 === 50){
    return true
  }

  return n1 + n2 === 50
}

/*
20. Write a JavaScript program to check two given integers whether one is positive and another one is negative
*/

function isIntegerPositiveAndNegative(n1,n2){
  if(!Number.isInteger(n1) || !Number.isInteger(n2)){
    throw new Error("Invalid input integers")
  }

  if(n1 > 0 && n2 < 0 || n2 > 0 && n1 < 0){
    return true
  }

  return false
}
console.log(isIntegerPositiveAndNegative(1,2))
