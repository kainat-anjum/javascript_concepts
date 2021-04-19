//find no. of chracter in a string

var count = 0;

const takeString = (text, char) => {
  const arr = [...text];
  arr.map((data, index) => {
    if (arr[index] === char) {
      count++;
    }
  });
  return count;
};

console.log(takeString("strinrnr", "r"));

const arr = [0, 1, 2, 3, 4, 2];

console.log(arr.filter((value, index) => arr.indexOf(value) == index));
