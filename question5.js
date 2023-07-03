
// 💡 **Question 5**

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// **Example 1:**

// **Input:** s = "abcdefg", k = 2

// **Output:**

// "bacdfeg"
function reverseStr(s, k) {
    // Convert the string into an array of characters
    let arr = s.split('');
  
    // Iterate over the array with a step size of 2k
    for (let i = 0; i < arr.length; i += 2 * k) {
      // Define the start index of the substring to be reversed
      let start = i;
  
      // Define the end index of the substring to be reversed
      let end = Math.min(i + k - 1, arr.length - 1);
  
      // Reverse the substring
      while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
      }
    }
  
    // Convert the array back to a string and return the result
    return arr.join('');
  }
  
  // Example usage
  const s = "abcdefg";
  const k = 2;
  const reversedString = reverseStr(s, k);
  console.log(reversedString); // Output: bacdfeg
  
