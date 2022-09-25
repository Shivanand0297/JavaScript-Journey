const states = [
    'Uttar Pradesh',
    'Delhi',
    'Maharashra',
    14,
    'tamil nadu'
]

/*
for (i=0; i<states.length; i++){
    
    if(typeof states[i]!='string') continue;
    console.log(states[i]);
}
*/

//while
let i=0;
while (i<states.length){
   // i+=1;
    console.log(states[i]);
    i+=1;
}