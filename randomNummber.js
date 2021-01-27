//generates a random number between given max and min number
function randomNumber(min, max) {
  var ran = Math.floor(Math.random() * (max - min + 1) + min);
  return ran;
}

var yourNum = randomNumber(2, 15);
console.log(yourNum);
