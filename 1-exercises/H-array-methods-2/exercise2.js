/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/



function capitalise(str) {
    let capitalisedStr = str.split('');         //Within the function create a variable named capitalisedStr and within that state what want to do with the string. In this case,
                                                // the .split method splits a string into an array of substrings and returns the array (W3). This new array, now stored in the variable
    capitalisedStr[0] =str [0].toUpperCase();   //capitalisedStr[0] is now assigned an additional value - which turns the first element of the index [0] to uppercase. Finally, this 
     return capitalisedStr.join('');            //is returned again but it is still separated from .split , so we use .join to return the values joined again. 
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
