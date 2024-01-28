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

/*nouns:	  items in order
            an object of items
verbs:	create an object with all the items in the order
		    count the items in the order and record them

An empty object
Loop
Count
Return object with items and count

Variable = an empty object
For each string in the order
Add that string to the object
Record the number of strings?
(Accumulate based on the name of the string)
Return the object with the strings and their amount.

Const orderCount = {}
For (str in strings){
	orderCount += 1;
	}*/

/*const myCounter = (strings) => {
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
*/
const myCounter = (strings) => {
  const orderCount = {};
  // define varibale = to an empty object i = 0
  for (const str of strings) {
    // loop through each string of the strings in the array
    if (str in orderCount) {
      // loop through each string in the array til done i < orderCount
      orderCount[str] += 1;
      // for each multiple string in orderCount add 1 to that string in the count
    } else {
      // else string = 1 in the count
      orderCount[str] = 1;
    }
  }
  // retrun the count
  return orderCount;
};

// create a variable = to myCounter variable taking in the parameter of flavors in the array
const flavorTally = myCounter(flavors);
//print the varibale in the form of a table
console.table(flavorTally);
