fetch('https://api.chucknorris.io/jokes/random')
.then((response) => { // can call it whatever we want
    return response.json(); // we need to convert the response (ReadableStream) into json format in order to read it
})
.then((data) => {
    // console.log("DATA:", data);
    var Joke = data.value;
    console.log("joke:", Joke);
})
.catch(); // when the website is down