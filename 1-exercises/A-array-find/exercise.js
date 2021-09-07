/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
  something that may be useful that I’m not sure we covered in the lesson is you can use && and || (and / or) operators in your arrow functions
this is especially handy in .find() and .filter() as we’re able to test multiple conditions (much like in an if statement)
for example
myArray.filter(x => x > 3 && x < 7)  which in english would be “filter my array (myArray) of numbers, returning those that are greater than 3 and less than 7”
myArray.filter(x => x < 1 || x > 10  which in english would be “filter my array (myArray) of numbers, returning those that are less than 1 or greater than 10" (edited) 
*/

// write your code here

const names = ["Rakesh", "Antonio","Alexandra","Andronicus","Annam","Mikey","Anastasia","Karim","Ahmed",
];



 function findLongNameThatStartsWithA(name){
   return name.length >7;
 }



let longNameThatStartsWithA = findLongNameThatStartsWithA.find(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
```js
function isLongName(name) {
  return name.length > 6;
}
```
```js
var longName = names.find(isLongName);

console.log(longName); // logs Mozafar
```