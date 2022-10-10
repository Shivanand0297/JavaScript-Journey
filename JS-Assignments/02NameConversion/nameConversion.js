// TODO: camel case
function camelCase(stringToConvert) {
  // converting all characters to lowercase
  var ans = stringToConvert.toLowerCase();

  // Returning string to camelcase
  return ans
    .split(" ")
    .reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
}

// TODO: pascal case:

function pascalCase(stringToConvert) {
  let words = stringToConvert.split(" ");
  for (i of words) {
    words[words.indexOf(i)] = i.charAt(0).toUpperCase() + i.slice(1);
  }

  return words.join("");
}

// TODO: snakeCase:

function snakeCase(stringToConvert) {
  let ans = stringToConvert.toLowerCase().split(" ").join("_");
  return ans;
}

// TODO: screamingSnakeCase
function screamingSnakeCase(stringToConvert) {
  let ans = stringToConvert.toLowerCase().split(" ").join("_");
  return ans.toUpperCase();
}

// TODO: kebabcase
function kebabcase(stringToConvert) {
  let ans = stringToConvert.toLowerCase().split(" ").join("-");
  return ans;
}

// TODO: screamingKebabCase
function screamingKebabCase(stringToConvert) {
  let ans = stringToConvert.toLowerCase().split(" ").join("-");
  return ans.toUpperCase();
}

// grabing convert button
let convertButton = document.querySelector("#convert-btn");

// adding event listner to the convert button
convertButton.addEventListener("click", takeAction);

// TODO: main function
function takeAction() {
  // tageting the input text
  const stringToConvert = document.querySelector("#text").value;

  // calling camelcase function
  document.querySelector("#camel-case").innerText = camelCase(stringToConvert);

  // calling pascalCase function
  document.querySelector("#pascal-case").innerText =
    pascalCase(stringToConvert);

  // calling snakeCase function
  document.querySelector("#snake-case").innerText = snakeCase(stringToConvert);

  // calling screaming-snake-case function
  document.querySelector("#screaming-snake-case").innerText =
    screamingSnakeCase(stringToConvert);

  // calling kebab-case function
  document.querySelector("#kebab-case").innerText = kebabcase(stringToConvert);

  // calling screaming-kebab-case function
  document.querySelector("#screaming-kebab-case").innerText =
    screamingKebabCase(stringToConvert);
}

// TODO: reset
let resetButton = document.querySelector("#reset-btn");
resetButton.addEventListener("click", () => {
  stringToConvert = "";
  // calling with empty string for all function to reset the string
  document.querySelector("#camel-case").innerText = camelCase(stringToConvert);
  document.querySelector("#pascal-case").innerText =
    pascalCase(stringToConvert);
  document.querySelector("#snake-case").innerText = snakeCase(stringToConvert);
  document.querySelector("#screaming-snake-case").innerText =
    screamingSnakeCase(stringToConvert);
  document.querySelector("#kebab-case").innerText = kebabcase(stringToConvert);
  document.querySelector("#screaming-kebab-case").innerText =
    screamingKebabCase(stringToConvert);
});
