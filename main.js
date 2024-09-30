let products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 52000, quantity: 3 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
      { id: 4, color: "white", price: 54000, quantity: 4 },
      { id: 5, color: "blue", price: 51000, quantity: 2 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "Zubair: It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "Excellent Product",
        comments: "Ali: I absolutely love it!",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "orange", price: 48000, quantity: 6 },
      { id: 3, color: "green", price: 55000, quantity: 8 },
      { id: 4, color: "purple", price: 53000, quantity: 3 },
      { id: 5, color: "gold", price: 59000, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "Zubair: It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "Best Mobile",
        comments: "Ali: Perfect for my needs!",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Headphones",
    variations: [
      { id: 1, color: "black", price: 3000, quantity: 15 },
      { id: 2, color: "white", price: 3500, quantity: 10 },
      { id: 3, color: "red", price: 3200, quantity: 5 },
      { id: 4, color: "blue", price: 3400, quantity: 8 },
      { id: 5, color: "green", price: 3100, quantity: 12 },
    ],
    reviews: [
      {
        id: 1,
        user: "Samira",
        rating: 4.2,
        title: "Great Sound",
        comments: "Samira: The sound quality is impressive.",
        date: "10-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Tariq",
        rating: 4.0,
        title: "Good for the Price",
        comments: "Tariq: Comfortable and decent sound.",
        date: "09-02-2021",
        status: true,
      },
      {
        id: 3,
        user: "Zara",
        rating: 4.7,
        title: "Love Them!",
        comments: "Zara: Best headphones for my workouts.",
        date: "08-02-2021",
        status: true,
      },
    ],
  },
];

// Exercise 1
// Get all product titles and display them in array format.
// Example: ['Sony LED 40 inch', 'Mobile', 'Bike']
// Try with function or without function

let ProductTitle = [];
for (let i = 0; i < products.length; i++) {
  ProductTitle.push(products[i].title);
}
console.log(ProductTitle);

function PrintTitle(products) {
  let arr = [];
  for (let i = 0; i < products.length; i++) {
    arr.push(products[i].title);
  }
  return arr;
}
console.log(PrintTitle(products));

// Exercise 2
// Get all the unique colors from the product variations.
// Example: ['black', 'red', 'silver']
// Try with function or without function

let productcolor = [];
 for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].variations.length; j++) {
      let color = products[i].variations[j].color;
      if (!productcolor.includes(color)){
        productcolor.push(color);
      }
    }
  }
console.log(productcolor);

function getuniquecolor(products) {
  let uniquecolor = [];
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].variations.length; j++) {
      let color = products[i].variations[j].color;
      if (uniquecolor.indexOf(color) === -1) {
        uniquecolor.push(color);
      }
    }
  }
  return uniquecolor;
}
console.log(getuniquecolor(products));


// Exercise 3
// Get the total quantity of all products.
// Example: 23
// Try with function or without function

// Total Quantity from function
function getTotalquantity(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].variations.length; j++) {
      sum += products[i].variations[j].quantity;
    }
  }
  return sum;
}
console.log(getTotalquantity(products));


// Total Quantity from without function
let sum = 0;
for (let i = 0; i < products.length; i++) {
  for (let j = 0; j < products[i].variations.length; j++) {
    sum += products[i].variations[j].quantity;
  }
}
console.log(sum);

// Exercise 4
// Get all product reviews where the status is true.
// Example: [{ review1 }, { review3 }, ...]
// Try with function or without function

// from function
function getReview(products) {
  let arr = [];
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].reviews.length; j++) {
      if (products[i].reviews[j].status) {
        arr.push(products[i].reviews[j]);
      }
    }
  }
  return arr;
}
console.log(getReview(products));


//without function
let arr = [];
for (let i = 0; i < products.length; i++) {
  for (let j = 0; j < products[i].reviews.length; j++) {
    if (products[i].reviews[j].status) {
      arr.push(products[i].reviews[j]);
      console.log(arr);
    }
  }
}

// Exercise 5
// Find the most expensive variation across all products.
// Example: { color: 'silver', price: 55000 }
// Try with function or without function

// from function
function getMostExpensiveVariation(products) {
  let maxVariation = null
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].variations.length; j++) {
      let variation = products[i].variations[j];
      if (maxVariation === null || variation.price > maxVariation.price) {
        maxVariation = variation;
      }
    }
  }

  return maxVariation
}
console.log(getMostExpensiveVariation(products));

// Exercise 6
// Get the average rating of all reviews.
// Example: 4.2

function avgRatting(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].reviews.length; j++) {
      sum += products[i].reviews[j].rating;
      let averagerating = sum / products[i].reviews.length;
      return averagerating;
    }
  }
}
console.log(avgRatting(products));


// Exercise 7
// find a Product by id if not found return empty object
// Example: {...}

function getproductbyId(products, productId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      return products[i];
    }
  }
}
console.log(getproductbyId(products, 101));
