let count = 0;

let value = document.querySelector("#value");
// console.log(value);
let btns = document.querySelectorAll(".btn");
// console.log(btns);

btns.forEach(function (item) {
  //   console.log(item);
  item.addEventListener("click", function (val) {
    // console.log(val.currentTarget);
    // console.log(val.currentTarget.classList);
    let style = val.currentTarget.classList;
    // console.log(style);
    if (style.contains("increase")) {
      count++;
    } else if (style.contains("decrease")) {
      count--;
    } else if (style.contains("reset")) {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "Blue";
    } else {
      value.style.color = "Red";
    }
    value.textContent = count;
  });
});
