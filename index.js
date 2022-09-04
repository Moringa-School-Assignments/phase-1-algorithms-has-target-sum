function hasTargetSum(array, target) {
  // Write your algorithm here  
  for (let i = 0; i < array.length; i++) {
		for (let x = i + 1; x < array.length; x++) {
			if (array[i] + array[x] === target) {
				return true;
			}
		}
	}
	return false;
}

/* 
  Write the Big O time complexity of your function here
  Complexity -> O(n^2)
*/

/* 
  Add your pseudocode here
  1. Loop through the array the first time
  2. Iterate so that each num comes to contact with the other at i + 1 times
  3. If the sum of these two numbers add up the return true
  4. Otherwise collapse the whole method
*/

/*
  Add written explanation of your solution here
  for i times up to the length of the array, iterate through the array items.
  for each time looped over i add 1 to x
  check the sum of x and i
  if the sum matches the target return true
  else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
