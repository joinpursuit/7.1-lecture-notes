// ## More Problems (Solve if you finished the main problem or want more practice)

// ### Triangles

// Write a loop that console logs a **right isosceles triangle** made of `#` that has the height and length of the argument.

// > Ex: argument is 7

// ```
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ```

// - what is right isosceles triangle?
// - n rows
// - n columns where the top column has (n - (n - 1)) hashes, then decrementing,
// (n - (n - 2)) ... until we get to n hashes
// - return is a string or a console.log

// This solution has a O(n^2)

const rIsoRow = (hashes) => {
  let res = "";

  for (let i = 0; i < hashes; i++) {
    res += "#";
  }

  res += "\n";

  return res;
};

const rIsoTri = (n) => {
  let res = "";

  for (let i = 0; i <= n; i++) {
    let hashes = i;
    res += rIsoRow(hashes);
  }

  return res;
};

console.log(rIsoTri(5));

// Write a loop that console logs an **upside down right isosceles triangle** made of `#` that has the height and length of the argument.

// > Ex: argument is 6

// ```
// ######
// #####
// ####
// ###
// ##
// #
// ```

// Write a loop that console logs and **equilateral triangle** made of `#` (odd arguments only)

// > Ex: argument is 5

// ```
//   #
//  ###
// #####
// ```

// Write a loop that console logs and * upside down *equilateral triangle\*\* made of `#` (even arguments only)

// > Ex: argument is 8

// ```
// ########
//  ######
//   ####
//    ##
// ```

// ### Checkerboard

// Make a checkerboard of `#` (don't forget to look up what the standard size of a checkerboard is)

// The appearance should be like:

// ```
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// ```
