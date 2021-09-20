/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain null values
  It is decided that if there is a null value the program should exit
  - Add a check for null values, and if one exists, exit the program
  - Do not edit any of the existing code
*/

//Our buddy group discussed this with our tech mentor. We mostly discussed how the .exit is a function for the 
// process. .exit is a controlled manner of quitting the programme and helps to minimise errors. It is useful as it helps us to check that the data in the array is adequate for meeting 
//the conditions. If it is not, it will exit the program and therefore help identify why it did not run (i.e. a data/array issue rather than a direct code issue). We didn't actually use .some however...

var pairsByIndex = [[0, 3], [1, 2], [2, 1], null, [3, 0]];

// If there is a null value in the array exit the program with the error code
// https://nodejs.org/api/process.html#process_process_exit_code
// process.exit(1);

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

function checkNullValue(pair){
   if (pairsByIndex.some(null)) process.exit(1); 
  }

var pairs = pairsByIndex.map(function (indexes) {
  var student = students[indexes[0]];
  var mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);
