console.log("hello, world!");

const andy = {
  name: "Andy",
  home: "Seattle",
  pet: "Karma",
  vehicle: "Chevy",
  studying: ["html", "css", "javascript"],
  wantToLearn: ["react", "sql", "node.js"],
};

//CONDITIONALS EXERCISE
//write a conditional that logs a message saying whether your first name or last name is longer
function firstOrLastLonger(firstName, lastName) {
  if (firstName.length > lastName.length) {
    console.log("first is longer!");
  } else if (firstName.length < lastName.length) {
    console.log("last is longer!");
  } else if (firstName.length == lastName.length) {
    console.log("equal length!");
  } else {
    console.log("umm...");
  }
}

//write a function isEmpty(array) that returns whether a given array is empty or not
function isEmpty(array) {
  if (array.length == 0) {
    return true;
  } else {
    return false;
  }
}
// Is an empty array truthy or falsy? write a conditional to find outer
function isEmptyArrayFalsy(arr) {
  if (arr == false) {
    console.log("yeah");
  } else if (arr == true) {
    console.log("no it's truthy");
  } else {
    console.log("wut");
  }
}
