var data = "his";

function myFunc() {
  var data = "run"; //local variable will take precendence over global variable
  console.log(data);
}

console.log(data);
myFunc();
