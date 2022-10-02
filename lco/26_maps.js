var mymap = new Map();

mymap.set(1, "one") //keys can be anything and value can be anything: strings, arrays, no., objects, boolean

mymap.set(2, "two"); //sets the values
mymap.set(3, "three");
mymap.set(4, "four");
console.log(mymap);

console.log((mymap.get(2))); // to get values

// for iteration in maps 
// getting keys
for (const key of mymap.keys()) {
    console.log(`key is ${key}`);
}

// getting values
for (const value of mymap.values()) {
    console.log(`value is ${value}`);
}

// for accessing both key and value
for (const [key, value] of mymap) {
    console.log(`key is ${key} & value is ${value}`);
}

mymap.forEach( (key) => console.log(`${key}`) ) //for each is designed in such a way that it expects that you are working with the values, therefore it gives value rather than keys

mymap.forEach((key, value) => console.log(`${key} and key is ${value}`))  // it gives value first then key

//deleting

mymap.delete(2)
console.log(mymap);