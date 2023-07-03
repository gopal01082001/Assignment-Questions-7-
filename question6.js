
// 💡 **Question 6**

// Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

// A **shift** on s consists of moving the leftmost character of s to the rightmost position.

// - For example, if s = "abcde", then it will be "bcdea" after one shift.

// **Example 1:**

// **Input:** s = "abcde", goal = "cdeab"

// **Output:**

// true
function canShiftString(s, goal) {
    // Concatenate s with itself
    const concatenated = s + s;
  
    // Check if goal is a substring of concatenated
    return concatenated.includes(goal);
  }
  
  // Example usage
  const s = "abcde";
  const goal = "cdeab";
  const result = canShiftString(s, goal);
  console.log(result); // Output: true
  