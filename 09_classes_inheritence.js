// // Class

// // class User {
// //   constructor(
// //     firstName = "JavaScript",
// //     lastName = "Web Developer",
// //     email = "abc@gmail.com",
// //     password = "1234567"
// //   ) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.email = email;
// //     this.password = password;
// //   }
// //   getFullName() {
// //     const fullName = this.firstName + " " + this.lastName;
// //     return fullName;
// //   }
// // }

// // let user1 = new User("email@gmail.com", "12345678");
// // console.log(user1.getFullName());

// // let user2 = new User("Govind", "Magar", "govind@gmail.com", "123456789");
// // console.log(user2.getFullName());

// // Getter and Setter

// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.score = 0;
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }

//   get getFirstName() {
//     return this.firstName;
//   }
//   get getLastName() {
//     return this.lastName;
//   }

//   set setScore(score) {
//     this.score = score;
//   }

//   get getScore() {
//     return this.score;
//   }
// }

// let user1 = new User("Javascript", "WebDeveloper");
// console.log(user1.getFirstName);
// console.log(user1.getLastName);

// console.log(user1.getScore);
// user1.setScore = 7;
// console.log(user1.getScore);

// // inheritance

// class UserOne {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.score = 0;
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
// }

// class UserTwo extends UserOne {
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
// }
