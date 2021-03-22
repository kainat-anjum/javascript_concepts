function reverseString(str) {
  const arr = [...str];
  console.log(arr);
  const reverseArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
    reverseArr.push(arr[i]);
  }
  str = reverseArr.join("");
  console.log(str);
  return str;
}

reverseString("hello");
