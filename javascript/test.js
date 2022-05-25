var elem = null;
// var value = elem.value; // TypeError: Cannot read property 'value' of null

var value = elem && elem.value; // null

console.log(value);
