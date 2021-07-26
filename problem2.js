// Problem 2:
// We have this 1 array of items which contain items based on color, type and price.
// let items = [
// {color: 'red', type: 'tv', price: 18},
// {color: 'silver', type: 'phone', price: 20},
// {color: 'blue', type: 'phone', price: 20},
// {color: 'green', type: 'phone', price: 20}
// ];
// We need to print items, which are not included in excludes array.
// let excludes = [
// {k: 'color', v: 'silver'},
// {k: 'type', v: 'tv'},
// ];
// this means that if an item has property color and its value silver, if an item has property type and value tv, it wont be printed or included in result

let items = [
  { color: "red", type: "tv", price: 18 },
  { color: "silver", type: "phone", price: 20 },
  { color: "blue", type: "phone", price: 20 },
  { color: "green", type: "phone", price: 20 },
];

let excludes = [
  { k: "color", v: "silver" },
  { k: "type", v: "tv" },
];

let count = 0;
let obj = [];

console.log(items.filter((o1) => !excludes.some((o2) => o1[o2.k] === o2.v)));

// return items;

