function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true
    }
  }   
  return false;
}

/* 
  Big O time complexity
  O(n^2)
*/

/* 
  pseudocode here
function hasTargetSum(array, target):
    for i from 0 to length(array) - 1:
        complement = target - array[i]
        for j from i + 1 to length(array) - 1:
            if array[j] equals complement:
                return true
    return false


*/

/*
  Add written explanation of your solution here

  The hasTargetSum function checks if there are two numbers in the array that add up to the given target. 
  It does this by comparing each element with the rest of the elements in a nested loop. 
  If a pair is found, it returns true; otherwise, it returns false. 
  This algorithm has a time complexity of O(n^2), where 'n' is the number of elements in the array.
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

  console.log("");

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
