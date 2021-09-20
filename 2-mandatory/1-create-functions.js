/*
Write a function that:
- Accepts an array as a parameter.
- Returns a new array containing the first five elements of the passed array.
*/
function first5(arr) {
 return arr.slice(0,5);
}

/*
Write a function that:
- Accepts an array as a parameter. //in this case arr 
- Returns a new array (USE .MAP?) containing the same elements, except sorted. USE .SORT 
// needs .map method as this returns a new array.
*/
function sortArray(arr) {
  return  arr.map((x) => arr).sort();
}

/*
NOTE: This exercise is the same as one you did last week - try to do it again using things you learnt this week.
Think about what is better about this solution than your one last week, and what is worse.

Write a function that:
- Takes an array of strings as input.
- Removes any spaces in the beginning or end each string. USE .TRIM 
- Removes any forward slashes (/) in the strings. USE .REPLACE (/\//g,'') * from stackoverflow
- Makes the strings all lowercase. USE .toLowerCase
*/

function tidyUpString(array) {
  return array.map((x) => x.trim().replace(/\//g,'').toLowerCase());
} 
/*
What is this code doing ^ ? tidyUpString is a function which is going to execute the code in L32. 
L32 begins with returning the parameter - array.  Array is appended to .map. 
.map is a method that will, in this case, take in the callback functions of .trim .replace .toLowerCase 
as an argument (??) and return it all in a new array. 
The opening parenthesis on L32 '(' is the start of the enclosure of the code that needs to be evaluated .
 I want the middle parentheses next to.map () containing x, to represent an element in the array and this will be iterated over by .map. 
 The => on L32 removes the need to write 'function, {} or return' in the code. And the following .replace and .toLowerCase() are 
 array methods presented as callback functions? 
*/
//could I have turned it into a variable like this? I guess not as variable do not have arguments and this ex. requires one? 
//const tidyUpString =  array.map((x) => x.trim().replace(/\//g,'').toLowerCase());



/*
Write a function that:
- Takes an array and an index as input.
- Returns a new array containing the same elements, but without the element at the passed index.  USE .slice ? USE .map? 
*/

function remove(array,index) {
  return array.slice(0,index).concat(array.slice(index + 1));
}

/* What is this ^ code doing? remove is a function that has two parameters - array and index. remove , as  function, 
will return a new array with all the values/elements in it EXCEPT for that specified/passed in INDEX. THe returned array will be added 
to the remaining array from point the index value/element was removed. 
This was used to test it separately from the tests below. 
let arr = [ 1,2, 5, 6, 8, 9, 1];
function remove(arr, index) {
  return arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
}
console.log(remove(arr, 4));

/*
Write a function that:
- Takes an array of numbers as input.USE (arrNum)
- Returns an array of strings formatted as percentages (e.g. 10 => "10%"). USE .MAP to add % 
- The numbers must be rounded to 2 decimal places. USE .toFIXED() or Math.round()
- Numbers greater 100 must be replaced with 100. USE If arrNum >100 .replace 100
*/
function formatPercentage(arrNum) {

	return arrNum.map(x => {

		x = x.toFixed(2);

		if (x >= 100) {
			x = 100;
		}
		return `${x}%`;
	});
}
/* ======= TESTS - DO NOT MODIFY ===== */

test("first5 function works for more than five elements", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const copyOfOriginal = numbers.slice();
  expect(first5(numbers)).toEqual([1, 2, 3, 4, 5]);
  // Make sure first5 didn't change its input array.
  expect(numbers).toEqual(copyOfOriginal);
});

test("first5 function returns a a smaller array for fewer than five elements", () => {
  const letters = ["z", "y", "x"];
  const copyOfOriginal = letters.slice();
  expect(first5(letters)).toEqual(["z", "y", "x"]);
  // Make sure first5 didn't change its input array.
  expect(letters).toEqual(copyOfOriginal);
});

test("sortArray function returns a sorted version of the array", () => {
  expect(sortArray(["a", "n", "c", "e", "z", "f"])).toEqual([
    "a",
    "c",
    "e",
    "f",
    "n",
    "z",
  ]);
});

test("sortArray function doesn't change the passed in array", () => {
  const before = ["a", "n", "c", "e", "z", "f"];
  const copy = before.slice();
  sortArray(before);
  expect(before).toEqual(copy);
});

test("tidyUpString function works", () => {
  expect(
    tidyUpString([
      "/Daniel",
      " /Sanyia",
      "AnTHonY",
      "irina",
      " Gordon",
      "ashleigh   ",
      "   Alastair  ",
      " anne marie  ",
    ])
  ).toEqual([
    "daniel",
    "sanyia",
    "anthony",
    "irina",
    "gordon",
    "ashleigh",
    "alastair",
    "anne marie",
  ]);
});

describe("remove function", () => {
  test("removes index 0", () => {
    expect(remove([1, 2, 3], 0)).toEqual([2, 3]);
  });

  test("removes middle index", () => {
    expect(remove([1, 2, 3, 4, 5], 2)).toEqual([1, 2, 4, 5]);
  });

  test("removes end index", () => {
    expect(remove([1, 2, 3, 4, 5], 4)).toEqual([1, 2, 3, 4]);
  });

  test("removes only index", () => {
    expect(remove(["hi"], 0)).toEqual([]);
  });

  test("ignores missing index", () => {
    expect(remove(["hi"], 10)).toEqual(["hi"]);
  });

  test("doesn't modify input array", () => {
    let initial = [1, 2, 3];
    remove(initial, 1);
    expect(initial).toEqual([1, 2, 3]);
  });
});

test("formatPercentage function works", () => {
  expect(formatPercentage([23, 18.103, 187.2, 0.372])).toEqual([
    "23%",
    "18.1%",
    "100%",
    "0.37%",
  ]);
});
