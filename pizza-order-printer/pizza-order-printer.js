/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */

// import .fs module to read JSON file
import fs from "fs/promises";

// Get user inputted pizza order
const order = process.argv[2];
const size = process.argv[3];

// Find the pizza order and print it to the console
async function getPizzaOrder() {
  // read pizza order data from JSON file
  const data = await fs.readFile("./data.json", "utf-8");
  const pizzaOrders = JSON.parse(data);
  // check to see if awaiting the data from the JSON file worked
  console.log("DATA:", data);
  // now check to see if the pizzaOrders object was created correctly
  console.log("pizzaOrders:", pizzaOrders);

  // NOW we can use the pizzaOrders array to print the requested order(s)
  if (order === "getAllOrders") {
    // print every order, one per line
    for (let i = 0; i < pizzaOrders.length; i++) {
      console.log(pizzaOrders[i]);
    }
  } else if (order === "getOneOrder") {
    if (!pizzaOrders[size]) {
      console.log("Order not found. Please enter a valid order number.");
    } else {
      console.log(pizzaOrders[size]);
    }
  }
}
getPizzaOrder();
