var array = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  27,
  24,
  23,
];

var primeArray = [];

const primeNumbers = (numb) => {
  for (var x = 0; x < numb.length; x++) {
    let isPrime = false;

    if (numb[x] === 1) {
    } else if (numb[x] === 2) {
      primeArray.push(numb[x]);
    } else {
      for (let i = 2; i < numb[x]; i++) {
        if (numb[x] % i == 0) {
          // not prime
          isPrime = false;
          break;
        } else {
          isPrime = true;
        }
      }

      if (isPrime) {
        primeArray.push(array[x]);
      }
    }
  }
};

primeNumbers(array);

console.log("primeArray", primeArray);
