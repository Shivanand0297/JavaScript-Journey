/* function PascalCase(stringToConvert) {
  // converting all characters to lowercase
  var ans = stringToConvert.toLowerCase();

  // Returning string to PascalCase
  return (ans
    .split(" ")
    .reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)))).charAt(0).toUpperCase();
}

console.log(PascalCase("shivanand prajpari"));
 */

/* function PascalCase(stringToConvert){
    let words = stringToConvert.split(" ");
    for(i of words){
        words[words.indexOf(i)] = i.charAt(0).toUpperCase() + i.slice(1);
    }

    return words.join("");
}
console.log(PascalCase("shiva and pra")); */



// screaming snake case
function snake_case(stringToConvert){
    let ans = stringToConvert.toLowerCase().split(" ").join("-");
    return ans;
}

console.log(snake_case("shivanand pRjAPATI aASsdSDD ER"));