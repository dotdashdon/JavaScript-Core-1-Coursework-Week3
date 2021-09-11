
  // You are given an array of names.
  // Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
  
// write your code here


// This is declaring the array 
const names = ["Rakesh", "Antonio","Alexandra","Andronicus","Annam","Mikey","Anastasia","Karim","Ahmed",
];

//This is creating a function that will iterate over the array and return a name that fulfills both that it starts with A (so is  [0] stating the location where the A needs to be or an empty array? ) 
//and that is it is over letter letters long. 
 function ThisIsLongNameThatStartsWithA(name) {
   return name [0] === "A" && name.length > 7;
 }

 //This is a function that enables us to find the first name which starts with A and is longer than 7 letters but this is done so by using the .find method. ThisIsLongNameThatStartsWithA is the callback. 
function findLongNameThatStartsWithA(names) {
  return names.find(ThisIsLongNameThatStartsWithA)
}

//This is variable to store the function. We call this in the console.log to print the answer. 
let longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"