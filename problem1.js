// Problem 1:
// Make shortest combination sum of given number. The Combination should be front Values_ array provided.
// Amount is the sum we need to achieve.
// const values_ = [1, 2, 5, 10, 20, 50, 100, 500];
// const amount_ = 93;
// const makeSum = (values, amount) => {
//   values.map(val => {
//   });
//     return {
//         50: 1, 20: 2, 2: 1,  1: 1 //Make shortest combination like this
//     }
// }
// console.log(makeSum(values_, amount_));

// const values_ = [1, 2, 5, 10, 20, 50, 100, 500];
// const amount_ = 93;
// let array = [];
// let remaining = 93;

// const makeSum = () => {
//   var filteredValues = values_.filter((val) => val <= amount_);

//   var sortedArray = filteredValues.sort(function (a, b) {
//     return b - a;
//   });

//   for (let i = sortedArray.length; i >= 0; i--) {
//     if (values_[i] <= remaining) {
//       array.push(values_[i]);

//       remaining = remaining - values_[i];

//       while (values_[i] <= remaining) {
//         array.push(values_[i]);
//         remaining = remaining - values_[i];
//       }
//     }
//   }
// };

// makeSum();
// console.log("array", array);


const values_ = [1, 2, 5, 10, 20, 50, 100, 500];
const amount_ = 93;
let count = 0;
const makeSum = (values, amount) => {
  let lastAm = amount;
  return values
    .sort((a, b) => b - a)
    .map((value) => {
      if (value <= lastAm) {
        let remaining = lastAm % value;
        let am = lastAm / value;
        lastAm = remaining;
        while (remaining > value) {
          remaining = lastAm % value;
          am = lastAm / value;
          lastAm = remaining;
        }
        return { [value]: Math.floor(am) };
      }
    })
    .filter(Boolean);
};
console.log(makeSum(values_, amount_))