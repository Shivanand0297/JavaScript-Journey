const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//TODO:***MAP***

//1. Get array of all names

const arrayOfNames = characters.map((character) => {
  return character.name;
});

/* console.log(arrayOfNames); // array of names from the objects
 */

//2. Get array of all heights

const arrayOfHeight = characters.map((character) => {
  return character.height;
});
// console.log(arrayOfHeight);

//3. Get array of objects with just name and height properties

const shortObject = characters.map((character) => ({
  Name: character.name,
  gender: character.gender,
}));

// console.log(shortObject);

//4. Get array of all first names

const firstName = characters.map((character) => character.name.split(" ")[0]);
// console.log(firstName)

//TODO: ***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, curr) => acc + curr.mass, 0);
// console.log(totalMass);

//2. Get total height of all characters

//3 Get total number of characters by eye color

const characterByColorName = characters.reduce((acc, curr) => {
  const color = curr.eye_color;
  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {});

// console.log(characterByColorName)

//4. Get total number of characters in all the character names

const totalCharacterNo = characters.reduce((acc, curr)=>acc + curr.name.length,0);
// console.log(totalCharacterNo)

//TODO: ***FILTER***
// 1. Get characters with mass greater than 100

const massGreaterThen100 = characters.filter((character) => {
  return character.mass > 100;
});
/* console.log(massGreaterThen100);     //returns array of objects
console.log(massGreaterThen100[0]);  */ //returns object (value at 0 index)

/* 
const massGreaterThen100_ = characters.filter((character) =>character.mass > 100);  // if there is one line we can use this without return
console.log(massGreaterThen100_); */

// 2. Get characters with height less than 200.

const heightLessThen200 = characters.filter(
  (character) => character.mass < 200
);
// console.log(heightLessThen200);

//3. Get all male characters

const maleCharacter = characters.filter(
  (character) => character.gender === "male"
);
// console.log(maleCharacter);

//4. Get all female characters

const femaleCharacter = characters.filter(
  (character) => character.gender === "female"
);
// console.log(femaleCharacter);

//TODO: ***SORT***
//1. Sort by mass
const byMass = characters.sort((a, b) => a.mass - b.mass);
// console.log(byMass);

//2. Sort by height
//3. Sort by name
const byName = characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1;
});
// console.log(byName);

//4. Sort by gender
const byGender = characters.sort((a) => {
  if (a.gender === "female") return -1;
  else return 1;
});
// console.log(byGender);

// TODO:***EVERY*** (pass a condition on each element in the array)
//1. Does every character have blue eyes?

const hasBlueEyes = characters.every((character)=> character.eye_color === "blue")
console.log(hasBlueEyes)

//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//TODO: ***SOME***
//1. Is there at least one male character?

const oneMaleCharacter = characters.some(
  (character) => character.gender === "male"
);
// console.log(oneMaleCharacter);

//2. Is there at least one character with blue eyes?
const oneBlueEye = characters.some(
  (character) => character.eye_color === "blue"
);
// console.log(oneBlueEye);

//3. Is there at least one character taller than 210?
const oneTallerThen210 = characters.some((character) => character.height > 210);
// console.log(oneTallerThen210);

//4. Is there at least one character that has mass less than 50?
const oneMassLess50 = characters.some((character) => character.mass < 50);
// console.log(oneMassLess50);
