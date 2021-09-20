/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.

  There are bushes with many different colour berries.

  The pink berries are the ONLY safe ones to eat.

  If any other berries are present, it's best not to eat from the bush at all!

  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.
  Use the tests to confirm which message to return
  
  This exercise can be solved in a few different ways. One way might include the array methods
  .some() and .every(). 
  
  The .some() method tests to see if some of the values (at least 1) in an array 
  match what you're looking for and returns true or false. 
  
  The .every() method will only return true if all values match watch you're looking for. 
  
  Let's first look at an example that will teach you how to use these methods.
*/
//Requirements 
// 1. Check to see if the bush has ALL PINK berries 
// 2. Do not eat if any other non-pink berries are present
///3. Return a message saying it is safe to eat and another to say it is not. 

//Pseudo code 
//need to check if every berry is pink 
// If bush === pink then return message it is safe to eat. If not , return message, CAUTION, Avoid. 
//
// What does the code below mean? 
//L33 declares the function and names an array as the parameter . The next line creates a
// variable in which .every method is applied. .every is appended to the array and means that every berry 
//will be checked due to the presence of the subsequent code which is another function (checkBerry). This (callback?)
//function is stating that if the checked berry is equal to pink, return it. The if /else statement is outlining the
//condition -saying safeBerries return true then state bush is safe to eat from. 



function isBushSafe(berryArray) {
 let safeBerries =berryArray.every(checkedBerry =>{
   return checkedBerry ==="pink"
 })
 if (safeBerries) {
   return "Bush is safe to eat from" 
 } else {
    return "Toxic! Leave bush alone!"
 }
}

/* ======= TESTS - DO NOT MODIFY ===== */

test("isBushSafe finds toxic busy", () => {
  expect(
    isBushSafe(["pink", "pink", "pink", "neon", "pink", "transparent"])
  ).toEqual("Toxic! Leave bush alone!");
});

test("isBushSafe function finds safe bush", () => {
  expect(isBushSafe(["pink", "pink", "pink", "pink"])).toEqual(
    "Bush is safe to eat from"
  );
});
