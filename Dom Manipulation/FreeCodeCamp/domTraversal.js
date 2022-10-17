// TODO: Parent Node traversal

const ul = document.querySelector("#ul")
const li = document.querySelector(".list")
// console.log(li.parentElement.parentElement.parentElement.parentElement);
// console.log(li.parentNode.parentNode.parentNode.parentNode);

// TODO: child node traveral

// console.log(ul.childNodes); // also includes indentation in counting child nodes

// console.log(ul.firstChild); // can also includes indentation space also
// console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = "red"  // notice the index is not 0, its 1


console.log(ul.children);
console.log(ul.lastElementChild);
console.log(ul.firstElementChild);


// TODO: Siblings node traversal


console.log(ul.previousSibling);    //node
console.log(ul.nextSibling);

console.log(ul.previousElementSibling)
console.log(ul.nextElementSibling)


