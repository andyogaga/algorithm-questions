
// Q2
// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
// Example:
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]


// Create a function to easily swap the numbers if conditions are met
const swap = (arr, p1, p2) => {
  [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
  return arr;
};

const sortOddNumbers = arr => {
  // Check if arg is an array and return null if it isnt
  if (!Array.isArray(arr)) return null;
  // Check if array is empty and return empty array if true
  if (!arr.length) return arr;
  // Customized bubble sort to account for zero and even numbers
  // Loop through the array from right to left
  for (let i = arr.length; i > 0; i--) {
    // Check if values are numbers, not zero and are odd numbers
    if (!isNaN(arr[i - 1]) && arr[i - 1] !== 0 && arr[i - 1] % 2 === 1) {
      // Looping from left to right but only ending at present position of the first loop as the extreme right is successfully sorted
      for (let j = 0; j < i - 1; j++) {
        // Check if the inner loop values numbers, not zero and are odd numbers
        if (!isNaN(arr[j]) && arr[j] !== 0 && arr[j] % 2 === 1) {
          // Swap the value of the left to right if it is lower
          if (arr[i - 1] < arr[j]) swap(arr, j, i - 1);
        }
      }
    }
  }
  return arr;
};

console.log(sortOddNumbers([5, 3, 2, 0, 1, 8, 7, 8, 1, 4]));
