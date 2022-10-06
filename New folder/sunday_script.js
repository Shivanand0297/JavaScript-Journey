// Event Loop
// const UserOne = () => {
//   console.log("hello i am user one");
// };
// const UserTwo = () => {
//   setTimeout(() => {
//     console.log("I am insider User Two");
//   }, 2000);
//   console.log("hello i am user Two");
// };
// const UserThree = () => {
//   console.log("Helo i am user three");
// };

// UserOne();
// UserTwo();
// UserThree();

// Promise (callback, Promise Con (then catch), async await)
// - pending - resolve or reject
// - fullfilled (resolve)
// - reject (reject)

// const MakePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const arrOne = ["userOne", "UserTwo", "userThree"];
//     if (arrOne.length > 5) {
//       resolve("User Found");
//     } else {
//       reject("Not Found");
//     }
//   }, 2500);
// });

// MakePromise.then().catch()
// console.log(MakePromise.then())

// MakePromise.then((reslut) => {
//   console.log(reslut);
// }).catch((result) => {
//   console.log(result);
// });

// Async and Await

const UserOne = () => {
  return "I am UserOne";
};
const UserTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User Found");
    }, 1500);
  });
};
const UserThree = () => {
  return "I am UserThree";
};

const Wait = async () => {
  let GuestOne = UserOne();
  console.log(GuestOne);

  let GuestTwo = await UserTwo();
  console.log(GuestTwo);

  let GuestThree = UserThree();
  console.log(GuestThree);
};

Wait();
