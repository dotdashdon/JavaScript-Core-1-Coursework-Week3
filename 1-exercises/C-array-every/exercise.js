/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];
  
function areStudents(group) {                      // this function was created to iterate over group array and check if anyone else 
                                                  //present in addition to the students named in the other, students array. 
 return students.includes(group);
}
var groupIsOnlyStudents =group.every(areStudents); // complete this statement // i had to create the function areStudents (see above)
                                                   // the new variable calls the function areStudents
if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
console.log(groupIsOnlyStudents);