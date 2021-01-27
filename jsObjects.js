var obj = {
  name: "egg",
  type: "plant",
  age: 2,
  color: ["green", "red"],
  5: "2",
};

//access objects with . notation

var eggName = obj.name;
var eggColor = obj.color[1];

//access objects with []
var eggType = obj[type];

//access object properties with variables
var data = "name";
var eggAge = obj[data];

//add new property to javascript object
obj.hands = 2;

//delete obj properties
delete obj.name
