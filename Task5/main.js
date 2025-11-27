/*
 * Exercise 1: Double numbers
 */
function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}
console.log(doubleNumbers([2, 5, 100]));

/*
 * Exercise 2: Convert numbers to strings
 */
function stringItUp(arr) {
  return arr.map((num) => String(num));
}
console.log(stringItUp([2, 5, 100]));

/*
 * Exercise 3: Capitalize names
 */
function capitalizeNames(arr) {
  return arr.map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  );
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

/*
 * Exercise 4: Extract names only
 */
function namesOnly(arr) {
  return arr.map((person) => person.name);
}
console.log(
  namesOnly([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 },
  ])
);

/*
 * Exercise 5: Matrix age check
 */
function makeStrings(arr) {
  return arr.map((person) =>
    person.age >= 18
      ? `${person.name} can go to The Matrix`
      : `${person.name} is under age!!`
  );
}
console.log(
  makeStrings([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 },
  ])
);

/*
 * Exercise 6: Convert to <h1> <h2>
 */
function readyToPutInTheDOM(arr) {
  return arr.map((person) => `<h1>${person.name}</h1><h2>${person.age}</h2>`);
}
console.log(
  readyToPutInTheDOM([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 },
  ])
);

/*
 * Exercise 7: Double values
 */
function doubleValues(arr) {
  return arr.map((num) => num * 2);
}
console.log(doubleValues([1, 2, 3]));
console.log(doubleValues([1, -2, -3]));

/*
 * Exercise 8: Multiply value * index
 */
function valTimesIndex(arr) {
  return arr.map((value, index) => value * index);
}
console.log(valTimesIndex([1, 2, 3]));
console.log(valTimesIndex([1, -2, -3]));

/*
 * Exercise 9: Extract key
 */
function extractKey(arr, key) {
  return arr.map((obj) => obj[key]);
}
console.log(
  extractKey(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "name"
  )
);

/*
 * Exercise 10: Extract full name
 */
function extractFullName(arr) {
  return arr.map((obj) => `${obj.first} ${obj.last}`);
}
console.log(
  extractFullName([
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia" },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele" },
  ])
);
