
function sortedArrayToBST(nums) {
  function createTree(left, right) {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);

    return {
      val: nums[mid],
      left: createTree(left, mid - 1),
      right: createTree(mid + 1, right)
    };
  }

  return createTree(0, nums.length - 1);
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));

