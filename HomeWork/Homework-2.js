
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

// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

/*
function sumOfallOddAndEven(n){
    var sumEven = 0;
    var sumOdd = 0;
    for (let i = 1; i <= n; i++){
        if(i%2==0){
            sumEven  = sumEven +i;
        }
        else {
            sumOdd  = sumOdd +i;
        }
    }
    console.log(`Sum of all Odd Numbers from 1 to 100 is :${sumOdd}`);
    console.log(`Sum of all Even Numbers from 1 to 100 is :${sumEven}`); 
}

sumOfallOddAndEven(100);
*/

//30. Write a script which generates a random hexadecimal number.

/*

for (let i = 1; i<=10; i++){ // loop will run the case 10 times  
let no = Math.floor(Math.random()*16); // getting random no between 1 to 15
// console.log(no);
switch (no) {
    case 10:
        console.log("A");
        break;
    case 11:
        console.log("B");
        break;
    case 12:
        console.log("C");
        break;
    case 13:
        console.log("D");
        break;
    case 14:
        console.log("E");
        break;
    case 15:
        console.log("F");
        break;
    default:
        console.log(no);
        break;
}
}

*/

/*31. Sort the webTechs array and mernStack array
countries Array : https://gist.github.com/incredimike/1469814 */

const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
    "land",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];
//console.log(countryList.sort());

/*
32. Array Questions
    - Extract all the countries contain the word 'land' from the countries array and print it as array
    - Find the country containing the hightest number of characters in the countries array
    - Extract all the countries containing only four characters from the countries array and print it as array
    - Extract all the countries containing two or more words from the countries array and print it as array
    - Reverse the countries array and capitalize each country and stored it as an array
 */
//- Extract all the countries contain the word 'land' from the countries array and print it as array

// let result = countryList.filter((country)=>country.includes('land'));
// console.log(result);

// let result2 = countryList.filter((country)=>country.length);
// console.log(result2);
/*
let temp = ['shiva', 'akash', 'anshul', 'sssssaiaaaaaaaani', 'shivanand', 'mani'];
let lenghtArray = [];
temp.filter(el => {
    for(let i = 0; i < temp.length; i++){
        lenghtArray.push(el.length);
    }     
});
console.log(lenghtArray.sort());;
console.log(lenghtArray[lenghtArray.length-1]);

*/

// let nam=['shiva','anshul','saini','mani'];
// let newnam=[];
// for (let i=0; i<nam.length; i++){
//     newnam.push(nam[i].toUpperCase());
// }
// console.log(newnam); 

//Extract all the countries containing two or more words from the countries array and print it as array

/*
let newArray =[];
for(let i of countryList){
    if(i.includes(" ")){
        newArray.push(i);
    }
}
console.log(newArray.sort());
*/

//- Extract all the countries containing only four characters from the countries array and print it as array

/*
const newArray = [];
for(let i of countryList){
    if(i.length===4) newArray.push(i);
}
console.log(newArray);
*/

//Working for 
//let nam=['shiva','anshul','saini','mani'];
const newArray = [];
for(let i of countryList){
      newArray.push(i.length)
}
console.log(newArray);
console.log(newArray.sort());
console.log(newArray[newArray.length-1]);
