const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "3475dc85",
      s: searchTerm,
    },
  });

  console.log(response.data);
};

const input = document.querySelector("input");

// const debounce = (func) => {
//   let timeoutId;
//   return (arg) => { //passing the arguments in this return will only work for one params
//     if (timeoutId) {
//       clearInterval(timeoutId);
//     }
//     timeoutId = setTimeout(() => {
//       func(arg); // calling the func after 500 milliseconds
//     }, 500);
//   };
// };

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
