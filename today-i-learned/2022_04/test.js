const queryString = require('query-string');
const result = queryString.parse('person[name]=tom&person[age]=3');
console.log(result);
