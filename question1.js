
// 💡 **Question 1**

// Given two strings s and t, *determine if they are isomorphic*.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// **Example 1:**

// **Input:** s = "egg", t = "add"

// **Output:** true
function isIsomorphic(s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    const mapS = {};
    const mapT = {};
  
    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];
  
      if (!mapS[charS]) {
        mapS[charS] = charT;
      } else if (mapS[charS] !== charT) {
        return false;
      }
  
      if (!mapT[charT]) {
        mapT[charT] = charS;
      } else if (mapT[charT] !== charS) {
        return false;
      }
    }
  
    return true;
  }
  
//   // Test case
//   const s = "egg";
//   const t = "add";
//   const result = isIsomorphic(s, t);
//   console.log(result); // Output: true
  