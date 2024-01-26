//When they view the browser console, they observe a table listing how many
// of each flavor they have ordered.

// nouns: items in the order
// an object of the items

//verbs: create an object with all the items in the order
//count the items in the order and records them.

//an empty object to hold all the items
//for each string in the order
//add item to the object
//record the number of items
//return the items in the object and the amount of items

//@param {string[]} items in the order
//@returns object and number of items

//const myCounter = (strings) => {};

//const flavorTally = myCounter(userOrder);
//console.table(flavorTally);

// Otherwise you _have_ to use bracket notation with a variable key

//function will be a 'for' 'of' statement

// weather[key] -> weather["temperature"] -> this works
// this is adding the kep temp to the weather object

// Iterate, this would be the start of out function....
//for (const key in weather) {

//this function returns the total cost of the items in dinner

//function calculateCost(meal){
//let total = 0;
//for (const food in meal){
//total += meal[food];
//}
//return total;
//}

//this adds the values of dinner to calculate the total cost..
//function calculateCost(meal){
//let total = 0;
//for (const food in meal){
//total += meal[food];
//}
//return total;
//}

//basic loop iteration

//let j = 0;
//while (j < 5) {
//console.log(j);

//j += 1;
//}

//const myCounter = (strings) => {};

//const flavorTally = myCounter(userOrder);
//console.table(flavorTally);

//prompt the customer for their order:
const userInput = prompt(
  "Please enter some integers separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

//split the tally of flavore into an array:
const flavors = userInput.split(",");

console.log(flavors);

//table objects in a nice interface:
//console.table();

const myCounter = (strings) => {
  const orderCount = {};
  for (const str of strings) {
    if (str in orderCount) {
      orderCount[str] += 1;
    } else {
      orderCount[str] = 1;
    }
    return orderCount;
  }
};

const flavorFrequencies = myCounter(flavors);
console.table(flavorFrequencies);
