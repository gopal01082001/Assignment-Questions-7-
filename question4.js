
// 💡 **Question 4**

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// **Example 1:**

// **Input:** s = "Let's take LeetCode contest"

// **Output:** "s'teL ekat edoCteeL tsetnoc"
function reverseWords(s) {
    const words = s.split(' ');
    const reversedWords = [];
  
    for (let word of words) {
      const reversedWord = word.split('').reverse().join('');
      reversedWords.push(reversedWord);
    }
  
    return reversedWords.join(' ');
  }
  
  // Test case
//   const s = "Let's take LeetCode contest";
//   const result = reverseWords(s);
//   console.log(result); // Output: "s'teL ekat edoCteeL tsetnoc"
  
