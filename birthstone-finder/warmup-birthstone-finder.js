/* -------------------------
💎 Birthstone Finder
----------------------------
Create a program that determines the birthstone for a month inputted by the user. 

Check the README.md file for instructions.
------------------------- */

// birthstone data object
const birthstones = {
  January: "Garnet",
  February: "Amethyst",
  March: "Aquamarine",
  April: "Diamond",
  May: "Emerald",
  June: "Pearl, Alexandrite, or Moonstone",
  July: "Ruby",
  August: "Peridot",
  September: "Sapphire",
  October: "Opal or Tourmaline",
  November: "Topaz or Citrine",
  December: "Tanzanite, Zircon, or Turquoise",
};

// Get the month from CLI ARGuments
// process.argv is an array that contains the command line arguments passed to the Node.js process
const month = process.argv[2];

// Show each of the CLI ARGuments passed to the Node.js process ()
console.log("ARG VARS:", process.argv);
// this is why month is in ARRAY brackets, bc we are using the value of the variable month as the KEY to access the VALUE in the birthstones object
if (birthstones[month]) {
  console.log(`The birthstone for ${month} is ${birthstones[month]}.`);
} else {
  console.log("Invalid month. Please enter a valid month.");
}

// Arianne's understanding for bracket notation:
// Do I understand correctly? The dot notation we’ve used so much because in React we are accessing property names we already know, but bracket notation comes into play when the property names is dynamic or depends on user input or something our program won’t know until it’s running?
