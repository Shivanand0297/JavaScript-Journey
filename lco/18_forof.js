//this is a array

const states = [
    'Uttar Pradesh',
    'Delhi',
    'Maharashra',
    14,
    'tamil nadu'
]

for (const n of states){ //for of for arrays
    console.log(n);
}

//this is a object

const names = {
    shiva: 'shivanand',
    saini: 'priyanka saini',
    mani: 'manisha'
};

for (const n in names){
    console.log(`key is: ${n} and value is: ${names[n]}`);
}