/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

/* Method 1 : Junior Way */
/*function findLargestElement(numbers) {
  let ans = numbers.length > 0 ? numbers[0] : undefined;

  numbers.forEach((number) => {
    ans = Math.max(ans, number);
  });

  return ans;
}*/

/* Senior Way , using spread operator , ternary operator */
function findLargestElement(number) {
  return number.length ? Math.max(...number) : undefined;
}

module.exports = findLargestElement;
