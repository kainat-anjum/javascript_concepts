//use rest parameter

const sum = (...props) => {
  const arguments = [...props];
  return arguments.reduce((a, b) => a + b, 0);
};

//reduce is used to give single result value

console.log(sum(2, 2, 3, 4, 5, 4));

//ES5: we used apply instead of spread operator apply(null,args)
const args = [2, 3, 2, 1, 5];
const maximum = Math.max.apply(null, args);
console.log(maximum);

//ES6 spread operator helps us do this
const max = Math.max(...args);
console.log(max);

//rest can be used in place of slice to collect rest of elements in separate array.

const [a,b,...arr]=[1,4,6,7,7,7,8]
console.log(a)
console.log(arr)
