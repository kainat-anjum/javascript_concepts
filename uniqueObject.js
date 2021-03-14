//Return unique values on basis of id from array of objects
var obj = [
  { id: 1, name: "ice" },
  { id: 2, name: "grill" },
  { id: 2, name: "rose" },
  { id: 3, name: "bell" },
];

const map = new Map();
const result = [];
for (var i = 0; i < obj.length; i++) {
  if (!map.has(obj[i].id)) {
    map.set(obj[i].id, true);
    result.push({
      id: obj[i].id,
      name: obj[i].name,
    });
  }
}
console.log(result);

