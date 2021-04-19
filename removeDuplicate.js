//Remove duplicate values from array

var array = [1, 2, 3, 4, 2, 4, 2, 3];

//remove elements with delete method
var count = 0;
const newArray = () => {
  for (var i = 0; i <= array.length - 1; i++) {
    for (var x = count; x <= array.length - 1; x++) {
      if (x < array.length - 1) {
        if (array[i] == array[x + 1]) {
          delete array[x + 1];
        }
      }
    }
    count++;
  }
  return array;
};

// console.log(newArray());

//removes elements with filter and indexOf

var filterArray = (data) => {
  return data.filter((value, index) => data.indexOf(value) === index);
};
console.log("filtered array:", filterArray(array));

var filterItem = (data, item) => {
  return data.filter(
    (value, index) =>  data.indexOf(item) !== index
  );
};

var newArr = [2, 3, 4, 5, 6, 7];
console.log("Filter specific value", filterItem(newArr, 4));
