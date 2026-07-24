// Task 12: Arrow Function Version
const getResult = (name, marks) => {
  if (marks >= 40) {
    return name + " has Passed";
  } else {
    return name + " has Failed";
  }
};
 
console.log(getResult("Farhan", 58));
console.log(getResult("Divya", 21));