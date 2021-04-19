var array = [8,0,7,5];

//ascending order
// console.log(array.sort((a, b) => a - b));

//descending order
// console.log(array.sort((a, b) => b - a));

var ascArray = [];

for (var i = 0; i < array.length; i++) {
  let min = array[i];

  for (var j = i + 1; j < array.length; j++) {
    if (min > array[j]) {
      min = ascArray[j];
    }
  }
  ascArray.push(min);
}

console.log("ascArray", ascArray);
