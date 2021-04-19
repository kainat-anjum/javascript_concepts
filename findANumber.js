//find an integer presence in a given range

function findNumber(x, y, z) {
  var arr1 = [];
  for (var i = x; i <= y; i++) {
    arr1.push(i);
  }

  var arr2 = [];
  for (var i = 40; i <= 10000; i++) {
    arr2.push(i);
  }
  const foundInDefault = arr2.find((z, index) => z == arr1[index])
    ? `Found ${z} in default range`
    : "Not found";
  const foundInUserImput = arr1.find((z, index) => z == arr1[index])
    ? `Found ${z} in user imput`
    : "Not found";
  return {foundInUserImput, foundInDefault};
}

// console.log(findNumber(40, 4000, 40));


//swap 2 variables

var a=2
var b=3
var temp;

temp=a;
a=b;
b=temp

// console.log("a,b =",a,b)


//find max value
var arr=[3,23,4,542,12]

const maxValue=Math.max(...arr)
console.log(maxValue)