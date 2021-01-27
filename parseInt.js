function parseToInteger(str) {
  var yourInt = parseInt(str);
  return yourInt;
}
console.log(parseToInteger("-23"));

//parseInt with radix

function parseToIntWithRadix(str, radix) {
  var parse = parseInt(str, radix);
  return parse;
}
console.log(parseToIntWithRadix("10011", 2));
