const product = require("C:/Users/hofa/Downloads/dataNEW.json");
const fs = require('fs');

fs.writeFile("C:/Users/hofa/Desktop/books/src/data.json", JSON.stringify(product.slice(0, 10)), err => {
  if (err) throw err;
  console.log("Done writing"); // Success
});