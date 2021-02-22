//Find count of unique values from array
var array = [1, 2, 3, 23, 2, 43, 2];

var uniqueElements = (data) => {
  //filter returns us an array
  return data.filter((value, index) => data.indexOf(value) === index).length;
};

console.log(uniqueElements(array));

//preferred way
const set = [...new Set(array)];
console.log(set);
