const myFunc = () => {
  return true;
};

//arrow function without body can be written without return
const arrFunc = () => false;

//concat 2 arrays with arrow function

const concatArr = (arr1, arr2) => arr1.concat(arr2);
console.log(concatArr([2, 1], [3, 21, 11]));

//assigning default values
const count = (number = 1, count = 1) => (count = number + 1);
