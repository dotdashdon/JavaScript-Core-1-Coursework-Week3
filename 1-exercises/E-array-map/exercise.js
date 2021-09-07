// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

// function byHundred (number) {
//     return number * 100;
// }

// var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
// var numbersByHundred = numbers.map(byHundred);

//console.log(numbersByHundred);


// var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
// var numbersByHundred = numbers.map(function byHundred(number) {
//      return number * 100;
// });
// console.log(numbersByHundred);



// var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
// var numbersByHundred = numbers.map(function (number) {
//      return number * 100;
// });
// console.log(numbersByHundred);


// var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
// var numbersByHundred = numbers.map(number => {
//      return number * 100;
// });
// console.log(numbersByHundred);

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersByHundred = numbers.map(number =>  number * 100);
console.log(numbersByHundred);