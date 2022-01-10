function reverseString(str) {
 let splitString = str.split('')
 let result = []
 for (i = splitString.length-1; i >=0; i--){
   result.push(splitString[i])
 }
 return result.join('')
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
