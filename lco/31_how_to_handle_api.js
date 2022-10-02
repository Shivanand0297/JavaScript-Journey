fetch('https://api.chucknorris.io/jokes/random')
.then((response) => {
    return response.json();
})
.then((data) => {
    // console.log("DATA:", data);
    var Joke = data.value;
    console.log("joke:", Joke);
})
.catch(); // when the website is down