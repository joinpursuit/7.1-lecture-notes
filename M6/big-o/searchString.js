function searchString(str, searchChar) {
  for (let char of str) {
    if (char === searchChar) {
      return true;
    }
  }

  return false;
}

searchString("abcd", "a"); // best case scenario: we find an "a" right away!

searchString("abcd", "c"); // medium scenario: "c" is in the middle of our string

searchString("abcd", "f"); // worst case scenario: we don't find an "f"

// In our worst case scenario, how many steps does our alg take?

// 4 steps === N steps (N represents length of string)
// O(N)
