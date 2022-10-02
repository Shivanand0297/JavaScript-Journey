const google = "google";
const fb = null; //null is falsy value
// !fb is true value
// !!fb is true false

if (google) {
  console.log("I execute - BLOCK 1");
}

if (!!fb) { // 100% false value, best for production grade applications
  console.log("I execute - BLOCK 2");
}
