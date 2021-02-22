//Return unique values on basis of id from array of objects
var obj = [
  { id: 1, name: "ice" },
  { id: 2, name: "grill" },
  { id: 2, name: "rose" },
  { id: 3, name: "bell" },
];

var newArr = [];
var unique;

var uniqueObject = (data) => {
  data.map((data, index) => {
    newArr.push(data.id);
  });
  return newArr;
};

var names = [];
var myObj = (data) => {
  var x = data.filter((value, index) => data.indexOf(value) === index);
  return x;
};

uniqueObject(obj);
console.log("unique", myObj(newArr));
