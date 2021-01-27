//const array elements are mutable.
const s = [5, 3, 2];
function editArray() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 3;
}
editArray()
console.log(s);
