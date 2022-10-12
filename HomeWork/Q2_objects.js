/**
 *   a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
  
  b. Create a function called signIn which allows user to sign in to the application.
  
  c. The products array has three elements and each of them has six properties. 
  
  d. Create a function called rateProduct which rates the product 
  
  e. Create a function called averageRating which calculate the average rating of a product
  
  f. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
 */

// users[0].username

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function signUp(email_ID, password) {
  const hasEmailID = users.some((user) => user.email === email_ID);
  if (!hasEmailID) {
    users.email = email_ID
    users.password = password
  } else console.log(`You already have an account`);
}

signUp("shiva@gmail.com", "1234")
console.log(users)