## Learnings
- params object in axios get request. 

```js  
axios.get(url, {
    params: {
      s: "search"
    }
  })
```
- input type event. 
```js
input.addEventListner("input", (e) => {
  e.target.value
})
```

- search debouncer
```js
const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => { // getting all the arguments in an array of params
    if (timeoutId) {
      clearInterval(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args); // passing all the arguments in a array form to the func fucntion
    }, delay);
  };
};

const onInput = (event) => {
    fetchData(event.target.value);
}

input.addEventListener("input", debounce(onInput, 500));

```