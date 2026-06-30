/* -------------------------
💎 Birthstone Finder
----------------------------
We will refactor the Birthstone Finder app to read birthstone data from a separate JSON file.
------------------------- */

// import .fs module to read JSON file
import fs from "fs/promises";

// HERE WE TURNED IT INTO A FUNCTION & NO BIRTHSTONE DATA OBJECT IN THIS FILE, WE WILL IMPORT IT FROM A JSON FILE
// =============================================================================

// Get user inputted month
const month = process.argv[2];

// Find the birthstone for the inputted month and print it to the console
async function getBirthStone() {
  // read birthstone data from JSON file
  const data = await fs.readFile("data.json", "utf-8");
  const birthstones = JSON.parse(data);

  // check to see if awaiting the data from the JSON file worked
  console.log("DATA:", data);
  // now check to see if the birthstones object was created correctly
  console.log("birthstones:", birthstones);

  // NOW we can use the birthstones object to find the birthstone for the inputted month
  // print birthstone with if/else statement
  if (!birthstones[month]) {
    console.log("Invalid month. Please enter a valid month name.");
  } else {
    console.log(`The birthstone for ${month} is ${birthstones[month]}.`);
  }
}
getBirthStone();
