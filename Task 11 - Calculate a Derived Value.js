//Task 11: Calculate a Derived Value
function getResult(name, marks) {
  if (marks >= 40) {
    return name + " has Passed";
  } else {
    return name + " has Failed";
  }
}
 
console.log(getResult("Ankit", 76));
console.log(getResult("Meera", 32));
