function swap(arr, i, j) {
  [arr[j], arr[i]] = [arr[i], arr[j]];
}

function sort(array) {
  // The outer for loop controls which time we are 'bubbling up'
  for (let j = 0; j < array.length; j += 1) {
    let haveSwapped = false;
    // the inner for loop permorms the 'bubble up' process.
    for (let i = 0; i < array.length - 1 - j; i += 1) {
      // check if I need to swap:
      if (array[i] > array[i + 1]) {
        haveSwapped = true;
        swap(array, i, i + 1);
      }
    }
    console.log(array);
    if (!haveSwapped) {
      break;
    }
  }
}

// ways to save time:
// write better 'bubble up' looping conditions
// figure out if we are done sorting and quit early

const nums = [20, 25, 22, 21, 24];
sort(nums);
console.log(nums);
