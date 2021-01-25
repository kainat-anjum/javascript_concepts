//any variable that is defined other than using var is global scope


var globalVar = "abc";

function myFunc() {
  globalVar = "def";
  console.log(globalVar);
}

myFunc()