
//28. Use for loop to iterate from 0 to 100 and print only prime numbers


// function to check prime no.

// function isprime(n) {
    
//     // exclude 0 and 1 since they are not prime no
//     if (n == 1 || n == 0) return  false; 
    
//     //running loop to check divisiblty of n from (2 to n-1) 
//     for (var i = 2 ; i <= n/2; i++){  //can also use i<n/2 since We already know that a number ‘n’ cannot be divided by any number greater than ‘n/2’.
//         if (n%i==0) return false; //if number is divisible by i then it is not prime
//     }
//     return true; //if not divisible then it is prime

//     /*
//     for (var i = 2 ; i <= Math.floor(Math.sqrt(n)); i++){  //can also use  i <= Math.floor(Math.sqrt(n)) // If a number ‘n’ is not divided by any number less than or equals to the square root of n then, it will not be divided by any other number greater than the square root of n. So, we only need to check up to the square root of n.
//         if (n%i==0) return false; //if number is divisible by i then it is not prime
//     }
//     return true; //if not divisible then it is prime
//     */
// }

/*
// taking limit
var N = 10;

// check for every no from 1 to N
for ( var j=1 ; j<=N ; j++){
    if (isprime(j)){
        console.log(j); //printing prime no
    }
}

*/