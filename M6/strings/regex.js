const findVowels = (word) => {
  let res = "";
  // write the expression you're looking for inside two slashes
  // if the pattern you're looking for includes multiple character
  // you need to wrap the pattern in square brackets
  // add flags AFTER the final slash (g (global), i (insensitive), etc.)
  const regex = /[eaiou]/gi;
  // Use regular expression to return vowels in a word
  if (word.match(regex)) {
    return (res = word.match(regex).join(""));
  }
  return "No vowels found!";
};

console.log(findVowels("hello."));
console.log(findVowels(".hi"));
console.log(findVowels("?howdy"));
console.log(findVowels("Aloha"));
console.log(findVowels("pfft"));
