function binarySearch(nums, n, start = 0, end = null) {
  if (end === null) {
    end = nums.length;
  }

  if (end - start <= 0) return -1;

  let midIdx = Math.floor((end - start) / 2) + start;
  if (nums[midIdx] === n) return midIdx;
  else if (n < nums[midIdx]) return binarySearch(nums, n, start, midIdx);
  else return binarySearch(nums, n, midIdx + 1, end);
}
