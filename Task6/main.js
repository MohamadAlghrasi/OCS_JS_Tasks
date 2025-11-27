function doubleValues(arr) {
  return arr.map((num) => num * 2);
}

console.log(doubleValues([1, 2, 3]));
console.log(doubleValues([5, 1, 2, 3, 10]));

function onlyEvenValues(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(onlyEvenValues([1, 2, 3]));
console.log(onlyEvenValues([5, 1, 2, 3, 10]));

function showFirstAndLast(arr) {
  return arr.map((str) => str[0] + str[str.length - 1]);
}

console.log(showFirstAndLast(["colt", "matt", "tim", "udemy"]));
console.log(showFirstAndLast(["hi", "goodbye", "smile"]));

function addKeyAndValue(arr, key, value) {
  return arr.map((obj) => {
    obj[key] = value;
    return obj;
  });
}

console.log(
  addKeyAndValue(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "title",
    "instructor"
  )
);

function vowelCount(str) {
  let vowels = "aeiou";
  let result = {};
  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (vowels.includes(char)) {
        result[char] = (result[char] || 0) + 1;
      }
    });
  return result;
}

console.log(vowelCount("Elie"));
console.log(vowelCount("Tim"));
console.log(vowelCount("Matt"));
console.log(vowelCount("hmmm"));
console.log(vowelCount("I Am awesome and so are you"));
