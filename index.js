// SyntaxError: JSON.parse unexpected character in JavaScript

// EXAMPLE 1 - Use the `JSON.stringify()` method if you need to convert a value to JSON

// ✅ is now valid JSON string
const json = JSON.stringify({name: 'Tom'});

console.log(json); // 👉️ '{"name":"Tom"}'

// ------------------------------------------------------------------

// // EXAMPLE 2 - Make sure the value you are trying to parse is valid JSON

// console.log(typeof {}); // 👉️ "object"
// console.log(typeof JSON.stringify([1])); // 👉️ "string"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using a try/catch block to handle a potential error

// try {
//   const result = JSON.parse({});
// } catch (err) {
//   // ⛔️ Uncaught SyntaxError: JSON.parse: unexpected character at
//   // line 1 column 2 of the JSON data
//   console.log(err.message);
// }
