/*
    Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
    somewhere safe while they call home for help.
  
    Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

    To be safe, they need to land on the first unnamed planet that has Oxygen levels between 19.5% and 23.5%.

    Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%

    Some string methods that might help you here are .replace() and .substring(). 
*/

//Requirements 
// 1. Need to land on planet that has Oxygen levels between 19.5% and 23.5%.
// 2. 
///

//Pseudo code 
//find will stop at the first item that satisfies the function  -and then stop executing code. 
//What is wrong with this in this case?

//The function will do the following:
//It will check if the array item has % in it
//The substring will remove this % from the end of it 
//This enables it to be converted into a number 
// This number is checked to see if it is between 19.5(%) and 23.5(%)
// if these  conditions inside the function are satisfied, 
// the element is located  and the first element satisfying it will returned. 
//
//

function findSafeOxygenLevel(arr) {
  let safe = arr.find((item) =>{
    if(item.includes("%")){
    let item1 = item.substring(0, item.length - 1);
    item1.toString()  ;
    return (item1<23.5 && item1 > 19.5)}
  })
  return safe;
}


/* ======= TESTS - DO NOT MODIFY ===== */

test("findSafeOxygenLevel function works - case 1", () => {
  expect(
    findSafeOxygenLevel(["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"])
  ).toEqual("19.9%");
});

test("findSafeOxygenLevel function works - case 2", () => {
  expect(
    findSafeOxygenLevel(["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"])
  ).toEqual("20.2%");
});

test("findSafeOxygenLevel function filters out invalid percentages", () => {
  expect(
    findSafeOxygenLevel(["200%", "-21.5%", "20", "apes", "21.1%"])
  ).toEqual("21.1%");
});

test("findSafeOxygenLevel function returns undefined if no valid plants found", () => {
  expect(findSafeOxygenLevel(["50"])).toBeUndefined();
});
