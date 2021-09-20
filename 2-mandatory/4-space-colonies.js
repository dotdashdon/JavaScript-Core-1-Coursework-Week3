/*
  The voyagers decide that they quite like this planet, and some of them want to settle there and colonise it.

  They call the planet "Alpha" and they decide that the FAMILIES whose last names start with 'A' should stay,
  while the others go on in search of other planets to call home.

  Create a function that returns an array of colonisers that will stay, according to the above rules.

  NOTE: don't include any element that is not a "family".

  HINT: Whenever you read the above the instructions, try to come up with the main input and output and logic
        Input: Is an array
        Output: Is an array
        Logic: Only strings that start with A, and finish with family
  
*/

//Requirements: 
// 1. Filter families whose last name starts with A so they can STAY
//2.  Other families with names who start B-Z should go. 
//3. Return an array of those who will stay 
//4. Only include elements who are stated 'family'

//Pseudo Code 
// 1. Create a function (getSettlers) that takes an array of families (families) and returns ones with an array that has only families that start
//with the letter A and end with the string "family".
// 2.  Declare the function getSettlers and have 'families' as the parameter. 
// 3. State RETURN to families to indicate what the function will do ( return not print etc)
//4. Append filter method to families. This will iterate over 'families' array and using boolean return a list containing 'true' 
// to all elements containing family. 
//5. 'family' is stated but could equally be element as this is what it is referring to. ? 
//6. two methods are applied to the element/variable?  - startsWith and endsWith 
//
function getSettlers(families) {
  return families.filter(family => family.startsWith("A") && family.endsWith(" family"));
}
/* ======= TESTS - DO NOT MODIFY ===== */

test("getSettlers function works", () => {
  const voyagers = [
    "Adam family",
    "Potter family",
    "Eric",
    "Aldous",
    "Button family",
    "Jude",
    "Carmichael",
    "Bunny",
    "Asimov",
    "Oscar family",
    "Avery family",
    "Archer family",
    "Just A. family",
    "A Great family",
  ];

  expect(getSettlers(voyagers)).toEqual([
    "Adam family",
    "Avery family",
    "Archer family",
    "A Great family",
  ]);
});
